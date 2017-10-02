
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId={APP_ID}";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




(function($){

    $.fn.facebookWall = function(options){

        options = options || {};

        if(!options.id){
            throw new Error('You need to provide an user/page id!');
        }

        if(!options.access_token){
            throw new Error('You need to provide an access token!');
        }

        // Default options of the plugin:

        options = $.extend({
            limit: 15	// You can also pass a custom limit as a parameter.
        },options);

        // Putting together the Facebook Graph API URLs:


        // WICHTIG FIELDS einfügen welche attribute schaue fb api
        var graphUSER = 'https://graph.facebook.com/'+options.id+'/?fields=name,picture&access_token='+options.access_token+'&callback=?',
            graphPOSTS = 'https://graph.facebook.com/'+options.id+'/posts/?fields=full_picture,caption,description,message&access_token='+options.access_token+'&callback=?&date_format=U&limit='+options.limit;

        //var wall = this;

        $.when($.getJSON(graphUSER),$.getJSON(graphPOSTS)).done(function(user,posts){

            // user[0] contains information about the user (name and picture);
            // posts[0].data is an array with wall posts;

            var fb = {
                user : user[0],
                posts : []
            };
            var $feedcontainer = $( "#feedcontainer" );
            var html = "";
            html = html + '<div id = "wrapper-content">';

                for (var i = 0; i < posts[0].data.length; i++) {
                    if(typeof posts[0].data[i].message !== 'undefined') {

                        if(i==0){
                            html = html + '<div id = "facebook-sectionA">';
                            html = html + '<div id = "facebook-sectionA-container">';

                            html = html + '<div id = "facebook-picture-Container">';
                            html = html + '<img class="facebook-picture-sectionA" src="' + posts[0].data[i].full_picture + '" alt="Mountain View" >';
                            html = html + '</div>';




                            if (typeof posts[0].data[i].message !== 'undefined') {

                                var temp = "";
                                temp = posts[0].data[i].message;


                                var splitter = new Array("");
                                splitter = temp.split(/[\\.!\?]/);

                                html = html + '<div id ="facebook-headline-sectionA">';
                                html = html + splitter[0];

                                html = html + '</div>';

                            }
                            html = html + '<div id ="facebook-text-sectionA">';
                            html = html + posts[0].data[i].message;

                            html = html + '</div>';
                            html = html + '</div>';
                            html = html + '</div>';
                        } else if(i==1 || i ==5 || i==10){

                            html = html + '<div id = "facebook-sectionB">';
                            html = html + '<div id = "facebook-sectionB-container" style="margin-right: 3px">';

                            ;
                            html = html + '<img class="facebook-picture-sectionB" src="' + posts[0].data[i].full_picture + '" alt="Mountain View" >';





                            if (typeof posts[0].data[i].message !== 'undefined') {

                                var temp = "";
                                temp = posts[0].data[i].message;


                                var splitter = new Array("");
                                splitter = temp.split(/[\\.!\?]/);

                                html = html + '<div id ="facebook-headline-sectionB">';
                                html = html + splitter[0];

                                html = html + '</div>';

                            }
                            html = html + '<div id ="facebook-text-sectionB">';
                            html = html + posts[0].data[i].message;

                            html = html + '</div>';
                            html = html + '</div>';
                            


                            i++;
                            html = html + '<div id = "facebook-sectionB-container">';


                            html = html + '<img class="facebook-picture-sectionB" src="' + posts[0].data[i].full_picture + '" alt="Mountain View" >';





                            if (typeof posts[0].data[i].message !== 'undefined') {

                                var temp = "";
                                temp = posts[0].data[i].message;


                                var splitter = new Array("");
                                splitter = temp.split(/[\\.!\?]/);

                                html = html + '<div id ="facebook-headline-sectionB">';
                                html = html + splitter[0];

                                html = html + '</div>';

                            }
                            html = html + '<div id ="facebook-text-sectionB">';
                            html = html + posts[0].data[i].message;

                            html = html + '</div>';
                            html = html + '</div>';
                            html = html + '</div>';
                        } else {

                            html = html + '<div id = "feedbox">';


                            html = html + '<img class="facebook-picture" src="' + posts[0].data[i].full_picture + '" alt="Mountain View" >';
                            //['attachments']['data'][0]['media']['image']['src']  console.log(posts[0].data[0].full_picture);


                            html = html + '<div id ="facebook-description">';
                            if (typeof posts[0].data[i].message !== 'undefined') {
                                html = html + '<div id ="facebook-heading">';
                                var temp = "";
                                temp = posts[0].data[i].message;


                                var splitter = new Array("");
                                splitter = temp.split(/[\\.!\?]/);

                                html = html + splitter[0];

                                html = html + '</div>';

                            }
                            html = html + posts[0].data[i].message;


                            html = html + '</div>';
                            html = html + '</div>';
                            
                        }




                    
                }
            }
            html = html + '</div>';


            $feedcontainer.append( html );



                // Converting the created_time (a UNIX timestamp) to
                // a relative time offset (e.g. 5 minutes ago):
                //this.created_time = relativeTime(this.created_time*1000);

                // Converting URL strings to actual hyperlinks:
                //this.message = urlHyperlinks(this.message);



        });

        return this;

    };

    // Helper functions:

    function urlHyperlinks(str){
        return str.replace(/\b((http|https):\/\/\S+)/g,'<a href="$1" target="_blank">$1</a>');
    }

    function relativeTime(time){

        // Adapted from James Herdman's http://bit.ly/e5Jnxe

        var period = new Date(time);
        var delta = new Date() - period;

        if (delta <= 10000) {	// Less than 10 seconds ago
            return 'Just now';
        }

        var units = null;

        var conversions = {
            millisecond: 1,		// ms -> ms
            second: 1000,		// ms -> sec
            minute: 60,			// sec -> min
            hour: 60,			// min -> hour
            day: 24,			// hour -> day
            month: 30,			// day -> month (roughly)
            year: 12			// month -> year
        };

        for (var key in conversions) {
            if (delta < conversions[key]) {
                break;
            }
            else {
                units = key;
                delta = delta / conversions[key];
            }
        }

        // Pluralize if necessary:

        delta = Math.floor(delta);
        if (delta !== 1) { units += 's'; }
        return [delta, units, "ago"].join(' ');

    }

})(jQuery);