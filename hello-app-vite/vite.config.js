const path = require('path')

module.exports = {
    alias: {
        '/@/': path.resolve(__dirname, './src'),
        '/@mycomp/': path.resolve(__dirname, './src/components')
    },
}