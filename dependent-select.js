(function(){

    var noneSelectedVal = 0;
    var noneSelectedOptionHtml = '<option value="0" selected="selected">---</option>';

    var el = $("select[data-el]");
    el.on('change', function(){
        var elName = $(this).attr('data-el');
        var selectedValue = $(this).val();
        if(selectedValue == null) return;
        var dependentElements = $('select[data-depends-on="'+ elName +'"]');
        var dependentElementsLength = dependentElements.length;

        if(selectedValue == noneSelectedVal){
            for(var i=0; i<dependentElementsLength; i++){
                var dependentElement = $(dependentElements[i]);
                dependentElement.html(noneSelectedOptionHtml);
                dependentElement.trigger('change');
            }
        } else{
            for(var i=0; i<dependentElementsLength; i++){
                var dependentElement = dependentElements[i];
                var url = $(dependentElement).attr('data-url').replace(/{.+}/i, selectedValue);
                $.ajax({
                    url : url,
                    success : function(res, status, xhr){
                        res = noneSelectedOptionHtml + res;
                        $(dependentElement).html(res);
                        if(!$(dependentElement).attr('data-selected')){
                            $(dependentElement).val(noneSelectedVal);
                            return;
                        }
                        if($(dependentElement).attr('data-selected') != ''){
                            $(dependentElement).val($(dependentElement).attr('data-selected'));
                        } else{
                            $(dependentElement).val(noneSelectedVal);
                        }
                        $(dependentElement).trigger('change');
                    }
                });
            }
        }

    });

    $("select[data-depends-on]").each(function(){
        $(this).html(noneSelectedOptionHtml);
        $(this).val(noneSelectedVal);
    });

    $("select[data-selected]").each(function(){
        var el = $(this);
        if(el.attr('data-selected') != ''){
            el.val(el.attr('data-selected'));
            el.trigger('change');
        }
    });

})();