module.exports = (function() {
    function beanCount(char, string) {
      var beans = '';
      for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === char)
          beans += char;
      }
      return beans.length;
    }

    function beanSpatter(char, string) {
      var beanLength = Math.floor(Math.random() * 11);
      var sl = string.length;
      var newStr = '';
      var i = 0;
      var bean;

      while (i < sl >= 0) {
        bean = '';
        var numberOfBeans = Math.floor(Math.random() * beanLength);
        
        for (var j = 0; j <= numberOfBeans; j++) {
          bean += char;
        }
        i++;
      }
      return newStr;
    }
    
    return {
        beanCounter: beanCount,
        beenSpatter: beanSpatter
    }
}())
