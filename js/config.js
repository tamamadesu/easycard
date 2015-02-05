var GuiConfig = {

        init:function(){
        var gui = require('nw.gui');
        var nativeMenuBar = new gui.Menu({ type: "menubar" });

        win = gui.Window.get();
        try {
            nativeMenuBar.createMacBuiltin("EasyCard");
            win.menu = nativeMenuBar;
        } catch (ex) {
            alert(ex.message);
        }

        // var trayHandle = function(){
        //     win.hide();
        // }
        // // var tray = new gui.Tray({title: 'EC',icon: 'img/cover.ico' });
        // var tray = new gui.Tray({title: 'EC'});
        // var menuTray = new gui.Menu();
        // menuTray.append(new gui.MenuItem({ label : 'show',
        //    click: function(){
        //         win.show();
        //    }
        // }));
        // menuTray.append(new gui.MenuItem({ label : 'quit',
        //    click: function(){
        //         win.removeListener('close', trayHandle);
        //         tray.remove();
        //         win.close();
        //    }
        // }));
        // tray.menu = menuTray;

        // win.on('close', trayHandle);
    }
}








$("#r").on("mouseover",function(){
    setTimeout(function(){
        $(this).html('done');
        window.location.reload();
    },1000);
});



var EasyCard = {

    autoCenter:function(){
        $(".show-decks").css({
            "width":$(".show-decks").outerWidth(),
            "float":"none"
        });
    },
    switchControl:function(){
        $(".header").on("click",".c",function(){
            var cls = $(this).attr("class").replace("c ",
                "");
            var gui = require('nw.gui'),
                win = gui.Window.get();
            switch(cls){
                case "quit":
                    win.close();
                break;
                case "mini":

                break;
                case "maxi":
                break;
            }
        })
    },
    slideSidebar:function(){
        $(".sidebar .tit").on("click",function(){
            var $ul    = $(this).parent("ul"),
                height = $(this).outerHeight();

            if($ul.hasClass("open")){
                $ul.height(height);
                $ul.removeClass("open");
            }else{
                $ul.attr("style","");
                $ul.addClass("open");
            }
        });
    },
    getDecksList:function(){
        var items = '';
        for(var i=0;i<4;i++){
            items += '<div class="deck">未命名'+i+'</div>';
        }
        return $(items);
    },
    deckHandle:function(){

        var $deck = $(".show-decks"),
            $main = $(".main");

        $(".wrapper").on("dblclick",".deck",function(){
            $deck.fadeOut(function(){
                $main.fadeIn();
            });
        });

        $(".wrapper").on("click",".deck",function(){
                alert(1);
        });

        // $deck.isotope({
        //     itemSelector : '.deck',
        //     masonry: {
        //         columnWidth: 15,
        //         isFitWidth: true
        //     }
        // });
        // var items = this.getDecksList();
        // $deck.append(items).isotope( 'appended',items);
        // var a = $("<div class='deck'>newnew</div>")
        // $deck.prepend(a).isotope( 'prepended',a);
    },
    loading:{
        start:function(){
            $(".loading").show();
        },
        end:function(){
            $(".loading").fadeOut();
        }
    },

    init:function(){
        var _self = this;
        this.deckHandle();
        this.autoCenter();
        this.slideSidebar();
        this.switchControl();

        _self.loading.start();
        setTimeout(function(){
            _self.loading.end();
        },1000)
    }
}
EasyCard.init();
// GuiConfig.init()