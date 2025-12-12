class chromeObject{
    get openChrome(){
        return $('~Chrome');
    }
    get clstxt(){
        return $('.//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]');
    }
}
module.exports = new chromeObject();