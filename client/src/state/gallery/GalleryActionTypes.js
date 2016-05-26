// Action type constants, of the form
// GALLERY.ADD_FILES === 'GALLERY.ADD_FILES'

export default [
  'ADD_FILES',
  'DESELECT_FILES',
  'REMOVE_FILES',
  'SELECT_FILES',
  'SORT_FILES',
  'UPDATE_FILE_REQUEST',
  'UPDATE_FILE_SUCCESS',
  'ADD_FOLDER_REQUEST',
  'ADD_FOLDER_SUCCESS',
  'ADD_FOLDER_FAILURE',
  'DELETE_ITEM_REQUEST',
  'DELETE_ITEM_SUCCESS',
  'DELETE_ITEM_FAILURE',
  'LOAD_FOLDER_REQUEST',
  'LOAD_FOLDER_SUCCESS',
  'SET_FOLDER',
  'SET_FILE',
  'SET_FOLDER_PERMISSIONS',
  'HIGHLIGHT_FILES',
  'UNHIGHLIGHT_FILES',
].reduce((obj, item) => Object.assign(obj, { [item]: `GALLERY.${item}` }), {});
