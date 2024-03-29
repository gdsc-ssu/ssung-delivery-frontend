/**
 * check .xlsx extension
 */
const checkFileExtension = (file?: File) => {
    if (!file) {
        return;
    }

    const extention = file.name.split('.').pop();
    if (extention !== 'xlsx' && extention !== 'csv') {
        alert("Only files with '.xlsx' or '.csv' extensions can be entered.")
        return;
    }
}

export default checkFileExtension;