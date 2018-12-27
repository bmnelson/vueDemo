let size = {

    height: (piece = 1,total=1) => {
        return Math.floor(Number((window.screen.availHeight / piece)*total)) + 'px'
    },
    width: window.screen.availWidth + 'px'
}

export default size;