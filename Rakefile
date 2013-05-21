require 'yui/compressor'

task :build do
  compressor = YUI::CssCompressor.new
  css        = compressor.compress(File.read('./facebook.css'))
  result     = DATA.gsub('${CSS}', css.inspect)
  File.open('facebook.user.js', 'w+') {|f| f.write result }
end

task :default => :build

DATA = %{
    // ==UserScript==
    // @name        facebook user style
    // @namespace   https://github.com/pedrogimenez/facebook-user-style
    // @version     1.0
    // @match       *://facebook.com/*
    // ==/UserScript==

    (function(){
        var style       = document.createElement('style');
        style.type      = 'text/css';
        style.innerHTML = ${CSS};

        document.head.appendChild(style);
    })();
}