
    // ==UserScript==
    // @name        facebook user style
    // @namespace   https://github.com/pedrogimenez/facebook-user-style
    // @version     1.0
    // @match       *://facebook.com/*
    // ==/UserScript==

    (function(){
        var style       = document.createElement('style');
        style.type      = 'text/css';
        style.innerHTML = "#pagelet_pinned_nav,#appsNav,#pagesNav,#groupsNav,.storyUnconnectedPost,#rightCol,#boulder_fixed_header,.UFIArrow,.hasLeftCol #leftCol{display:none}.hasLeftCol #contentCol{border-left:0;margin:0}.-cx-PRIVATE-uiList__lightBorder>li,.hasLeftCol #mainContainer{border:0}.hasLeftCol .homeWiderContent div#contentArea{width:100%}.hasLeftCol #contentArea,.hasRightCol #contentArea{float:right}.-cx-PRIVATE-uiSquareImage__root:only-child{border-radius:50px}.fbChatSidebar,.UFIRow{background-color:#fff;border:0}.shareRedesign,.UFIContainer{width:100%}.UFIContainer{margin-top:15px}.uiMentionsInput .mentionsTextarea{height:40px!important}.uiStreamLargeHeadline .uiStreamStory .uiStreamHeadline{font-size:16px}";

        document.head.appendChild(style);
    })();
