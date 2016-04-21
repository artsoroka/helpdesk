module.exports = {
    APP: {
        port: process.env.HELPDESK_PORT || 8080,
        public_dir: __dirname + '/../public' 
    }, 
    DB: {
        dir: process.env.HELPDESK_DB_DIR || __dirname + '/../db', 
        file: process.env.HELPDESK_DB_FILE || 'tickets.db'
    }, 
    DateTime: {
        timezone: process.env.HELPDESK_TIMEZONE || 'Europe/Moscow', 
        format: process.env.HELPDESK_DATE_DORMAT || 'YYYY-MM-DD HH-mm-ss'
    }
}; 