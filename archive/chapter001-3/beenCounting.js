module.exports = (function() {
    function beanCount(char, string) {
      var beans = '';
      for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === char)
          beans += char;
      }
      return beans.length;
    }

    function beanSpatter(char, string, fuzziness) {
      if (!fuzziness > 0) {
        fuzziness = 1;
      };

      var beanLength = Math.floor(Math.random() * 11);
      var sl = string.length;
      var newStr = '';
      var i = 0;
      var bean;

      while (i < sl && beanLength >= 0) {
        bean = '';
        var numberOfBeans = Math.floor(Math.random() * beanLength);
        beanLength -= numberOfBeans;
        for (var j = 0; j <= numberOfBeans; j++) {
          bean += char;
        }

        if (Math.floor((Math.random() * fuzziness + 1)) === (fuzziness)) {
          newStr += (string[i] + bean);
        }
        i++;
      }
      return newStr;
    }
    
    return {
        beanCounter: beanCount,
        beenSpatter: beanSpatter
}());
