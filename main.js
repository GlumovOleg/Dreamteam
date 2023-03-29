Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@TrifonovAD 
sortedmap
/
git-advanced-s2
Public
Fork your own copy of sortedmap/git-advanced-s2
Code
Issues
Pull requests
Actions
Projects
Security
Insights
git-advanced-s2/main.js /
@sortedmap
sortedmap refactoring
Latest commit 8897d25 on Nov 1, 2022
 History
 1 contributor
46 lines (41 sloc)  1.61 KB

(function(){
    let countSpaces = function(text) {
        let matches = text.matchAll(/\s/g);
        let count = 0;
        for(let match of matches) {
            count++;
        }
        return count;
    }

    let changeButtonsStatus = function(enable) {
        let countButton = document.querySelector('#count-button');
        let resetButton = document.querySelector('#reset-button');
        if (enable) {
            countButton.removeAttribute('disabled');
            resetButton.removeAttribute('disabled');
        } else {
            countButton.setAttribute('disabled', 'disabled');
            resetButton.setAttribute('disabled', 'disabled');
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        let textArea = document.querySelector('#text');
        let result = document.querySelector('#result');
        let countButton = document.querySelector('#count-button');
        let resetButton = document.querySelector('#reset-button');

        countButton.addEventListener('click', function(){
            let text = textArea.value;
            let withoutSpaces = text.length - countSpaces(text);
            result.innerHTML = '<b>Длина текста:</b> ' +
                text.length + ' символов<br>' +
                '<b>Без пробелов:</b> ' + withoutSpaces + '<br>';
        });

        textArea.addEventListener('keyup', function(){
            changeButtonsStatus(textArea.value.length > 0);
        });

        resetButton.addEventListener('click', function(){
            textArea.value = '';
            changeButtonsStatus(false);
        });
    });
}());
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
git-advanced-s2/main.js at master · sortedmap/git-advanced-s2