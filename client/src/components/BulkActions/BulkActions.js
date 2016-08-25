import $ from 'jQuery';
import React from 'react';
import ReactDOM from 'react-dom';
import SilverStripeComponent from 'lib/SilverStripeComponent';
import ReactTestUtils from 'react-addons-test-utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as galleryActions from 'state/gallery/GalleryActions';
import i18n from 'i18n';

export class BulkActions extends SilverStripeComponent {

  constructor(props) {
    super(props);

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    const $select = $(ReactDOM.findDOMNode(this)).find('.dropdown');

    $select.chosen({
      allow_single_deselect: true,
      disable_search_threshold: 20,
    });

    // Chosen stops the change event from reaching React so we have to simulate a click.
    $select.change(() => ReactTestUtils.Simulate.click($select.find(':selected')[0]));
  }

  render() {
    // eslint-disable-next-line arrow-body-style
    const children = this.props.gallery.bulkActions.options.map((option, i) => {
      const className = [
        'bulk-actions_action',
        'ss-ui-button',
        'ui-corner-all',
        option.className || 'font-icon-info-circled',
      ].join(' ');
      return (<button
        type="button"
        className={className}
        key={i}
        disabled={option.disabled}
        onClick={this.onChangeValue}
        value={option.value}
      >
        {option.label}
      </button>);
    });

    return (
      <div className="bulk-actions fieldholder-small">
        <div className="bulk-actions-counter">{this.getSelectedFiles().length}</div>
        {children}
      </div>
    );
  }

  getOptionByValue(value) {
    // Using for loop because IE10 doesn't handle 'for of',
    // which gets transcompiled into a function which uses Symbol,
    // the thing IE10 dies on.
    for (let i = 0; i < this.props.gallery.bulkActions.options.length; i += 1) {
      if (this.props.gallery.bulkActions.options[i].value === value) {
        return this.props.gallery.bulkActions.options[i];
      }
    }

    return null;
  }

  getSelectedFiles() {
    return this.props.gallery.selectedFiles;
  }

  getSelectedFolder() {
    const folders = this.props.gallery.selectedFiles
      .map(id => this.props.gallery.files.find(file => file.id === id))
      // folders only
      .filter(file => file.type === 'folder');

    return folders.shift();
  }

  applyAction(value) {
    let result = false;

    // We only have 'delete' right now...
    switch (value) {
      case 'delete':
        this.props.deleteAction(this.getSelectedFiles());
        result = true;
        break;
      case 'editFolder':
        this.props.editFolderAction(this.getSelectedFolder());
        result = true;
        break;
      default:
    }

    return result;
  }

  onChangeValue(event) {
    const option = this.getOptionByValue(event.target.value);

    // Make sure a valid option has been selected.
    if (option === null) {
      return;
    }

    if (option.destructive === true) {
      // eslint-disable-next-line no-alert
      if (confirm(i18n.sprintf(i18n._t('AssetAdmin.BULK_ACTIONS_CONFIRM'), option.label))) {
        this.applyAction(option.value);
      }
    } else {
      this.applyAction(option.value);
    }

    // Reset the dropdown to it's placeholder value.
    $(ReactDOM.findDOMNode(this)).find('.dropdown').val('').trigger('liszt:updated');
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.assetAdmin.gallery,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(galleryActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BulkActions);
