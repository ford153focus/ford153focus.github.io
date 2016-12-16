function __frt__copyToClipBoard(node) {
    var emailLink = node;
    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
        // Now that we've selected the anchor text, execute the copy command
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        //console.log('Copy email command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();
}