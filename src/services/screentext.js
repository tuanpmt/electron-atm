function ScreenTextService(cursor){
  this.screen_text = {};
  this.cursor = cursor;

  /**
   * [init description]
   * @return {[type]} [description]
   */
  this.init = function(){
    this.screen_text = { 
      '@': '                                ', 
      'A': '                                ', 
      'B': '                                ', 
      'C': '                                ', 
      'D': '                                ', 
      'E': '                                ', 
      'F': '                                ', 
      'G': '                                ', 
      'H': '                                ', 
      'I': '                                ', 
      'J': '                                ', 
      'K': '                                ', 
      'L': '                                ', 
      'M': '                                ', 
      'N': '                                ', 
      'O': '                                '
    };
  };

  /**
   * [copy description]
   * @param  {[type]} screen_text [description]
   * @return {[type]}             [description]
   */
  this.copy = function(screen_text){
    this.screen_text = screen_text;
    this.cursor.init();
  };


  /**
   * [get description]
   * @return {[type]} [description]
   */
  this.get = function(){
    return this.screen_text;
  };

  /**
   * [getHTML description]
   * @return {[type]} [description]
   */
  this.getHTML = function(){
    if(this.screen_text){
      var converted = {};

      for (var key in this.screen_text)
        if (this.screen_text.hasOwnProperty(key)){
          converted[key] = this.screen_text[key].split(' ').join('&nbsp');
        }

      return converted;
    }
  };

  /**
   * [replaceCharAt description]
   * @param  {[type]} string      [description]
   * @param  {[type]} position    [description]
   * @param  {[type]} replacement [description]
   * @return {[type]}             [description]
   */
  this.replaceCharAt = function(string, position, replacement){
    return string.substr(0, position) + replacement + string.substr(position + 1);
  };

  /**
   * [add description]
   * @param {[type]} text [description]
   */
  this.add = function(text){
    for(var i = 0; i < text.length; i++){
      var char = text[i];
      var row = this.cursor.getPosition()['y'];
      var column = this.cursor.cursor_position['x'];

      this.screen_text[row] = this.replaceCharAt(this.screen_text[row], column, char);
      this.cursor.move();
    }
  };

    /**
   * [isEmpty description]
   * @return {[type]} [description]
   */
  this.isEmpty = function(){
    for (var key in this.screen_text) {
      if (this.screen_text.hasOwnProperty(key))
        if(this.screen_text[key] !== '                                ')
          return false;
    }
    return true;
  };

  /**
   * [setCursorPosition description]
   * @param {[type]} cursor_position [description]
   */
  this.setCursorPosition = function(cursor_position){
    this.cursor.setPosition(cursor_position['x'] + cursor_position['y']);
  };
};

module.exports = ScreenTextService;