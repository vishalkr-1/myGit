const { userDetails } = require('../model/signUp');
exports.downloadFile = async (req, res) => {
    try {
        const file = await userDetails.findById(req.params.id);
        if (!file) {
            return res.status(404).send('File not found');
        }
        res.download(file.filepath, file.filename);
    } catch (error) {
        console.error('Error downloading file:', error.message);
        res.status(500).send('Error downloading file.');
    }
};