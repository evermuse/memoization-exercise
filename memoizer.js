//module pattern for memoizer

function  memoizerModule() {

  var module = {

    getId : _getId,
    getSelector : _getSelector

  };

  //store the new Ids / Selectors in the module scope

  var memoId = {};
  var memoSelector = {};

  function _getId(id) {

    if (id == Object.keys(memoId)) {

      console.log('retrieving from cache');

      return memoId[id];

    }

    memoId[id] = document.getElementById(id);
    console.log('pushing to cache');
    return memoId[id];

  }

  function _getSelector(selector) {

    if (selector == Object.keys(memoSelector)) {

      console.log('retrieving from cache');
      return memoId[selector];

    }

    memoSelector[selector] = document.querySelector(selector);
    console.log('pushing to cache');
    return memoSelector[selector];

  }

  return module;

}

document.addEventListener('DOMContentLoaded', function() {

  var memo = memoizerModule();
  var theResult = memo.getId('myContent'); //expect pushing to cache
  theResult = memo.getId('myContent'); //expect retrieving from cache
  theResult = memo.getId('myContent'); //expect retrieving from cache

  var otherResult = memo.getSelector('#myContent'); //expect pushing to cache
  otherResult = memo.getSelector('#myContent'); //expect retrieving from cache
  otherResult = memo.getSelector('#myContent'); //expect retrieving from cache

});
