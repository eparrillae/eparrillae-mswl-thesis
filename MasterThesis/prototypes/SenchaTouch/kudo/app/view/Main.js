Ext.define("KUDO.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to KUDO project'
                },

                html: [
					"<p align='center'><img src='http://eparrillae.net/kudo/img/kudo-logo.png' /></p>",
                    "<span align='center' class='kudo'><h2>This is a hello world type page!</span></h2>"
                       
                ].join("")
            },
            {
                title: 'Info',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'More info'
                    },
					
					{ 
					html: [
					"<h2 class='kudo'>About this project</h2>",
                    "<p align='justify' class='kudo'>This is a simple two tabs example for the FLOSS Master Thesis.</p>",
					"<p align='justify' class='kudo'> For more info please visit my blog entries at: <a href='http://eparrillae.net/wordpress/?tag=mswl-thesis' target='_blank'>http://eparrillae.net</a></p>"
          			 ].join("")
            		}
                    
                ]
            }
        ]
    }
});
