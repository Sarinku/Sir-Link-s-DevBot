module.exports = async(client) => {

    client.user.setStatus('available');
    client.user.setPresence({
        game: {
            name: "ΛsтєгDєѵ | /help"
        }
    });
};