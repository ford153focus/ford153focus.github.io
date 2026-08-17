// #region body tagger
(() => {
    document.documentElement.classList.add(`host-${window.location.host}`);
    const splits = window.location.pathname.split('/').filter(x=>x);
    
    if (splits.length === 0) {
        document.documentElement.classList.add('current-homepage');
        return;
    }

    const current = splits.pop();
    for (let split of splits) {
        document.documentElement.classList.add(`parent-${split}`);
    }
    document.documentElement.classList.add(`current-${current}`);
})()
// #endregion body tagger