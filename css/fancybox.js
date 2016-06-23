var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
* Fancybox tag
*
* Syntax:
*   {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
*/

hexo.extend.tag.register('fancybox', function(args){
  var original = args[0];
  var thumbnail =  args[1] ? args[1] : original;
  var title = args[2] ? args[2] : ""; //args.join(' ');

  return '<a class="image-link" href="' + original + '" title="' + title + '">' +
      '<img src="' + (thumbnail || original) + '" alt="' + title + '">' +
    '</a>'
});