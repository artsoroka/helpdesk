module.exports = {
    APP: {
        port: process.env.HELPDESK_PORT || 8080,
        public_dir: __dirname + '/../public' 
    }, 
    DB: {
        db_files: process.env.HELPDESK_DB_DIR || __dirname + '/../db' 
    }
}; 