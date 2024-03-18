(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"defaultLocale":"en","name":"Player7313","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1}},"borderRadius":0,"contentOpaque":false,"width":"100%","overflow":"hidden","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"scrollBarWidth":10,"paddingTop":0,"id":"rootPlayer","definitions": [{"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"contentOpaque":false,"data":{"name":"logo"},"scrollBarWidth":10,"overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_8F116AD9_9D46_C349_41C9_A798093ECFCD","paddingLeft":0,"children":["this.Image_8C1D6824_9D49_4EFF_41E0_EED12DD9A309"],"paddingBottom":0,"paddingRight":0,"width":"21.715%","horizontalAlign":"left","scrollBarOpacity":0,"top":"0%","backgroundOpacity":0,"height":"12.9%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","left":"0%","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","hfov":30,"pitch":0},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_27ADF886_A56F_036E_41B0_250A780E75E7_camera"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Button46341"},"borderRadius":0,"width":50,"cursor":"hand","paddingTop":0,"id":"IconButton_8B7CC781_8410_7C39_41C6_44CDA51EECDB","paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"transparencyActive":true,"backgroundOpacity":0,"height":50,"pressedIconURL":"skin/IconButton_8B7CC781_8410_7C39_41C6_44CDA51EECDB_pressed.png","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_8B7CC781_8410_7C39_41C6_44CDA51EECDB_rollover.png","mode":"push","class":"IconButton","minHeight":0,"propagateClick":false,"shadow":false,"iconURL":"skin/IconButton_8B7CC781_8410_7C39_41C6_44CDA51EECDB.png","minWidth":0},{"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"contentOpaque":false,"data":{"name":"Container7825"},"overflow":"scroll","gap":10,"scrollBarWidth":10,"paddingTop":0,"id":"Container_8AD4D205_8410_5439_41AC_3C32E39E19AD","paddingLeft":0,"children":["this.IconButton_8B542643_8410_3C39_41CD_0EBC5C030DE8","this.IconButton_8B7CC781_8410_7C39_41C6_44CDA51EECDB"],"paddingBottom":0,"paddingRight":0,"width":"19.337%","horizontalAlign":"center","scrollBarOpacity":0,"backgroundOpacity":0,"height":"100%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20},{"toolTipHorizontalAlign":"center","borderSize":0,"right":"0%","borderRadius":0,"contentOpaque":false,"data":{"name":"zoom container"},"scrollBarWidth":10,"overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_8A7DEA92_8410_345B_41D4_C9F9ED8E1F8C","paddingLeft":0,"children":["this.Container_8AD4D205_8410_5439_41AC_3C32E39E19AD"],"paddingBottom":0,"paddingRight":0,"width":"100%","horizontalAlign":"center","scrollBarOpacity":0,"bottom":"0%","backgroundOpacity":0,"height":"9.702%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_27ADF886_A56F_036E_41B0_250A780E75E7_camera","media":"this.panorama_27ADF886_A56F_036E_41B0_250A780E75E7","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"toolTipHorizontalAlign":"center","borderSize":0,"scaleMode":"fit_inside","borderRadius":0,"data":{"name":"Image6845"},"width":"84.438%","paddingTop":0,"id":"Image_8C1D6824_9D49_4EFF_41E0_EED12DD9A309","paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"url":trans('Image_8C1D6824_9D49_4EFF_41E0_EED12DD9A309.url'),"verticalAlign":"middle","backgroundOpacity":0,"height":"52.991%","class":"Image","minHeight":1,"propagateClick":false,"shadow":false,"minWidth":1},{"toolTipHorizontalAlign":"center","playbackBarHeadShadowVerticalLength":0,"borderSize":0,"data":{"name":"Main Viewer"},"progressLeft":0,"toolTipFontFamily":"Arial","width":"100%","translationTransitionDuration":1000,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowOpacity":1,"subtitlesShadow":false,"subtitlesPaddingTop":5,"id":"MainViewer","paddingLeft":0,"subtitlesEnabled":true,"subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingRight":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowHorizontalLength":0,"toolTipFontWeight":"normal","toolTipShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","toolTipBorderColor":"#767676","toolTipShadowColor":"#333138","toolTipShadowSpread":0,"transitionDuration":500,"subtitlesGap":0,"progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"height":"100%","toolTipPaddingTop":4,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"toolTipBorderSize":1,"playbackBarHeadBorderSize":0,"playbackBarBorderColor":"#FFFFFF","progressBottom":0,"firstTransitionDuration":0,"playbackBarBorderRadius":0,"playbackBarLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressHeight":10,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"class":"ViewerArea","subtitlesFontSize":"3vmin","minHeight":50,"playbackBarHeadOpacity":1,"progressBorderSize":0,"playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingBottom":4,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"playbackBarBottom":5,"toolTipFontColor":"#606060","borderRadius":0,"progressRight":0,"subtitlesTextShadowVerticalLength":1,"minWidth":100,"playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesOpacity":1,"progressOpacity":1,"subtitlesBorderSize":0,"toolTipBorderRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","paddingTop":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","paddingBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","subtitlesTextShadowOpacity":1,"toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"subtitlesFontColor":"#FFFFFF","subtitlesFontWeight":"normal","toolTipShadowHorizontalLength":0,"subtitlesTextDecoration":"none","subtitlesPaddingLeft":5,"surfaceReticleSelectionColor":"#FFFFFF","surfaceReticleOpacity":0.6,"subtitlesTextShadowBlurRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"toolTipOpacity":1,"toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","transitionMode":"blending","playbackBarRight":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"toolTipPaddingRight":6,"shadow":false,"subtitlesPaddingRight":5,"displayTooltipInTouchScreens":true,"subtitlesFontFamily":"Arial"},{"autoplay":true,"loop":false,"audio":"this.audiores_502CF7FF_73F4_47DA_41D9_1D9BA3296C68","class":"MediaAudio","data":{"label":"suara taman"},"id":"audio_5029A9BD_73F4_485E_41D1_3D07AB7C1BA1"},{"overlays":["this.overlay_27AE1886_A56F_036E_41D3_E8A625F5C3EF","this.overlay_27AE0886_A56F_036E_41E0_076DB554E35A","this.overlay_27AE3886_A56F_036E_41D6_65DA3C4E2B52","this.overlay_27AE2886_A56F_036E_41C2_755365775CD8","this.overlay_27AE5886_A56F_036E_41E2_460FA5B30D9A","this.overlay_27AE4886_A56F_036E_41D0_C05B83BE0AA7","this.overlay_27AE7886_A56F_036E_41D3_D5695AD958DF","this.overlay_27AE6886_A56F_036E_41C9_219BAB6D1809","this.overlay_A338E1AE_AC15_098F_41E5_256B58121983","this.overlay_27AE8886_A56F_036E_41A0_3EC49ABF4DCF","this.overlay_27AEA886_A56F_036E_41DA_6BBE68D0D21E","this.overlay_27AED886_A56F_036E_41E0_22054FF1D928","this.overlay_27AEC886_A56F_036E_41DC_23517231E744","this.overlay_27AEF886_A56F_036E_4173_F262F8928630","this.overlay_27AEE886_A56F_036E_41CE_30714873DFD1","this.overlay_27AF1886_A56F_036E_41C8_8031EF1E2373"],"hfovMax":30,"pitch":0,"thumbnailUrl":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_t.jpg","hfovMin":"150%","label":trans('panorama_27ADF886_A56F_036E_41B0_250A780E75E7.label'),"partial":true,"frames":[{"class":"CubicPanoramaFrame","front":{"levels":[{"width":30720,"colCount":60,"url":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_0/f/0/{row}_{column}.jpg","height":30720,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":60},{"width":15360,"colCount":30,"url":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_0/f/1/{row}_{column}.jpg","height":15360,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":30},{"width":7680,"colCount":15,"url":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_0/f/2/{row}_{column}.jpg","height":7680,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":15},{"width":4096,"colCount":8,"url":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_0/f/3/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":8},{"width":2048,"colCount":4,"url":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_0/f/4/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"width":1024,"colCount":2,"url":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_0/f/5/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_0/f/6/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_27ADF886_A56F_036E_41B0_250A780E75E7_t.jpg"}],"class":"Panorama","id":"panorama_27ADF886_A56F_036E_41B0_250A780E75E7","data":{"label":"navigasi"},"hfov":30,"vfov":15.91},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Button46352"},"borderRadius":0,"width":50,"cursor":"hand","paddingTop":0,"id":"IconButton_8B542643_8410_3C39_41CD_0EBC5C030DE8","paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"transparencyActive":true,"backgroundOpacity":0,"height":50,"pressedIconURL":"skin/IconButton_8B542643_8410_3C39_41CD_0EBC5C030DE8_pressed.png","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_8B542643_8410_3C39_41CD_0EBC5C030DE8_rollover.png","mode":"push","class":"IconButton","minHeight":0,"propagateClick":false,"shadow":false,"iconURL":"skin/IconButton_8B542643_8410_3C39_41CD_0EBC5C030DE8.png","minWidth":0},{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","buttonZoomIn":"this.IconButton_8B542643_8410_3C39_41CD_0EBC5C030DE8","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","buttonZoomOut":"this.IconButton_8B7CC781_8410_7C39_41C6_44CDA51EECDB","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"mp3Url":trans('audiores_502CF7FF_73F4_47DA_41D9_1D9BA3296C68.mp3Url'),"class":"AudioResource","id":"audiores_502CF7FF_73F4_47DA_41D9_1D9BA3296C68"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942DB510_A22F_103E_41DE_1A1C9FE9F418","distance":50,"yaw":9.48,"pitch":5.29,"vfov":1.55,"class":"HotspotPanoramaOverlayImage","data":{"label":"AKP21"},"verticalAlign":"middle","horizontalAlign":"center","hfov":3.98,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"AKP21"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_901391FE_A265_73E3_41CE_35A8E6FD5FD0"],"id":"overlay_27AE1886_A56F_036E_41D3_E8A625F5C3EF"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942DA510_A22F_103E_41D1_38612A5C4DD7","distance":50,"yaw":10.39,"pitch":2.37,"vfov":1.24,"class":"HotspotPanoramaOverlayImage","data":{"label":"PPL21"},"verticalAlign":"middle","horizontalAlign":"center","hfov":5.03,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"PPL21"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9054C6C4_A263_1026_41D3_E3EFA7C83F35"],"id":"overlay_27AE0886_A56F_036E_41E0_076DB554E35A"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942D8510_A22F_103E_41C5_8F8ADFB5AEF7","distance":50,"yaw":8.45,"pitch":-2.13,"vfov":1.55,"class":"HotspotPanoramaOverlayImage","data":{"label":"P3KPI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":4.85,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"P3KPI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_909D781C_A26D_1026_41E3_4ACC8FCD75DA"],"id":"overlay_27AE3886_A56F_036E_41D6_65DA3C4E2B52"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942D7510_A22F_103E_41D1_3A5937C86D55","distance":50,"yaw":4.81,"pitch":3.64,"vfov":1.26,"class":"HotspotPanoramaOverlayImage","data":{"label":"LSPTA"},"verticalAlign":"middle","horizontalAlign":"center","hfov":3.82,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"LSPTA"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_90BAE3D8_A26C_F02E_41E2_A12FF2A01B04"],"id":"overlay_27AE2886_A56F_036E_41C2_755365775CD8"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942D5511_A22F_103E_41DF_8D20106B8499","distance":50,"yaw":-1.11,"pitch":2.36,"vfov":1.96,"class":"HotspotPanoramaOverlayImage","data":{"label":"PPPK"},"verticalAlign":"middle","horizontalAlign":"center","hfov":4.28,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"PPPK"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_90467A61_A263_301E_41D5_F39902940C33"],"id":"overlay_27AE5886_A56F_036E_41E2_460FA5B30D9A"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942D3511_A22F_103E_41E2_6EC95E5B2D7D","distance":50,"yaw":3.57,"pitch":-0.33,"vfov":1.57,"class":"HotspotPanoramaOverlayImage","data":{"label":"GALERI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":5.33,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"GALERI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_90552A7A_A263_F0E3_41B1_439E0E49E4E4"],"id":"overlay_27AE4886_A56F_036E_41D0_C05B83BE0AA7"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942D2511_A22F_103E_41CF_2604E5E54095","distance":50,"yaw":7.74,"pitch":0.67,"vfov":1.45,"class":"HotspotPanoramaOverlayImage","data":{"label":"mainstage"},"verticalAlign":"middle","horizontalAlign":"center","hfov":5.37,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"mainstage"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_904E1EF7_A264_F1E2_41E1_456BF70B55E1"],"id":"overlay_27AE7886_A56F_036E_41D3_D5695AD958DF"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942D1511_A22F_103E_41AF_A38626EFE6A9","distance":50,"yaw":6.26,"pitch":-3.84,"vfov":1.4,"class":"HotspotPanoramaOverlayImage","data":{"label":"AKKAI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":4.44,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"AKKAI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_90F291C9_A263_3021_41DF_C818339BB39F"],"id":"overlay_27AE6886_A56F_036E_41C9_219BAB6D1809"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_BC227293_AC15_0B96_41D2_D0DC152B6E3B","distance":50,"yaw":3.03,"pitch":5.4,"vfov":1.45,"class":"HotspotPanoramaOverlayImage","data":{"label":"AKKAI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":4.31,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"AKKAI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A33E91B6_AC15_099F_41CE_5BD54534867F"],"id":"overlay_A338E1AE_AC15_098F_41E5_256B58121983"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942CE511_A22F_103E_41E1_C9981DB7D39E","distance":50,"yaw":-3.24,"pitch":5.37,"vfov":1.32,"class":"HotspotPanoramaOverlayImage","data":{"label":"MAPPI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":5.14,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"MAPPI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_909A6B4B_A21D_1021_41B8_6669C843FB21"],"id":"overlay_27AE8886_A56F_036E_41A0_3EC49ABF4DCF"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942CC511_A22F_103E_41D8_416573B9634E","distance":50,"yaw":-1.6,"pitch":-1.03,"vfov":1.61,"class":"HotspotPanoramaOverlayImage","data":{"label":"IAMI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":3.84,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"IAMI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9096E3BF_A223_1061_41B9_6AF72618DA84"],"id":"overlay_27AEA886_A56F_036E_41DA_6BBE68D0D21E"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942CA511_A22F_103E_41E3_02769F6702FA","distance":50,"yaw":-5.92,"pitch":1.37,"vfov":1.75,"class":"HotspotPanoramaOverlayImage","data":{"label":"IAI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":4.12,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"IAI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_90AE554A_A225_1023_41E3_0871C26E0E83"],"id":"overlay_27AED886_A56F_036E_41E0_22054FF1D928"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942C9512_A22F_1022_41CE_0F06B100A14A","distance":50,"yaw":-5.39,"pitch":-2.52,"vfov":1.37,"class":"HotspotPanoramaOverlayImage","data":{"label":"IAPI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":3.86,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"IAPI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_90B46A06_A223_1023_41B1_CF876700AB45"],"id":"overlay_27AEC886_A56F_036E_41DC_23517231E744"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942C8512_A22F_1022_41D7_36BE1588BF57","distance":50,"yaw":-9.17,"pitch":-1.37,"vfov":1.11,"class":"HotspotPanoramaOverlayImage","data":{"label":"PERAKI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":4.09,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"PERAKI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_90BC4F0B_A22D_1022_41E1_DD645A611127"],"id":"overlay_27AEF886_A56F_036E_4173_F262F8928630"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942C4512_A22F_1022_41D8_0A173F957AD3","distance":50,"yaw":-9.61,"pitch":5.19,"vfov":1.19,"class":"HotspotPanoramaOverlayImage","data":{"label":"PERKOPPI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":4.18,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"PERKOPPI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9144E1DD_A22D_1021_41DD_E8E7C91B5C5F"],"id":"overlay_27AEE886_A56F_036E_41CE_30714873DFD1"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_942C3512_A22F_1022_41E0_6250C14EF95E","distance":50,"yaw":-10.67,"pitch":3.37,"vfov":1.33,"class":"HotspotPanoramaOverlayImage","data":{"label":"IKPI"},"verticalAlign":"middle","horizontalAlign":"center","hfov":3.94,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"IKPI"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_915DBBDD_A22F_F026_41CF_3CB9B9AC748C"],"id":"overlay_27AF1886_A56F_036E_41C8_8031EF1E2373"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942DB510_A22F_103E_41DE_1A1C9FE9F418_0.png"}],"class":"ImageResource","id":"res_942DB510_A22F_103E_41DE_1A1C9FE9F418"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_96F2E3B2_A263_1063_41DE_DACC1397FEFF.source'), '_top')","id":"HotspotPanoramaOverlayArea_901391FE_A265_73E3_41CE_35A8E6FD5FD0"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942DA510_A22F_103E_41D1_38612A5C4DD7_0.png"}],"class":"ImageResource","id":"res_942DA510_A22F_103E_41D1_38612A5C4DD7"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_97F3A813_A26D_1021_41D2_DC653EF0A934.source'), '_top')","id":"HotspotPanoramaOverlayArea_9054C6C4_A263_1026_41D3_E3EFA7C83F35"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942D8510_A22F_103E_41C5_8F8ADFB5AEF7_0.png"}],"class":"ImageResource","id":"res_942D8510_A22F_103E_41C5_8F8ADFB5AEF7"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_94E3A986_A26F_1023_41DA_B02851A186FA.source'), '_top')","id":"HotspotPanoramaOverlayArea_909D781C_A26D_1026_41E3_4ACC8FCD75DA"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942D7510_A22F_103E_41D1_3A5937C86D55_0.png"}],"class":"ImageResource","id":"res_942D7510_A22F_103E_41D1_3A5937C86D55"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_942CD62D_A26D_F061_41DE_B17C789238F1.source'), '_top')","id":"HotspotPanoramaOverlayArea_90BAE3D8_A26C_F02E_41E2_A12FF2A01B04"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942D5511_A22F_103E_41DF_8D20106B8499_0.png"}],"class":"ImageResource","id":"res_942D5511_A22F_103E_41DF_8D20106B8499"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_97609B10_A265_7020_41B8_7465AD9326E1.source'), '_top')","id":"HotspotPanoramaOverlayArea_90467A61_A263_301E_41D5_F39902940C33"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942D3511_A22F_103E_41E2_6EC95E5B2D7D_0.png"}],"class":"ImageResource","id":"res_942D3511_A22F_103E_41E2_6EC95E5B2D7D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_943DB0B4_A265_1066_41E2_A6EC68165DB4.source'), '_top')","id":"HotspotPanoramaOverlayArea_90552A7A_A263_F0E3_41B1_439E0E49E4E4"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942D2511_A22F_103E_41CF_2604E5E54095_0.png"}],"class":"ImageResource","id":"res_942D2511_A22F_103E_41CF_2604E5E54095"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_96BAFDC0_A264_F01F_41D2_6DF7580B2E4A.source'), '_top')","id":"HotspotPanoramaOverlayArea_904E1EF7_A264_F1E2_41E1_456BF70B55E1"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942D1511_A22F_103E_41AF_A38626EFE6A9_0.png"}],"class":"ImageResource","id":"res_942D1511_A22F_103E_41AF_A38626EFE6A9"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_954DF3E1_A21D_101E_41E3_D738C1C8EBB6.source'), '_top')","id":"HotspotPanoramaOverlayArea_90F291C9_A263_3021_41DF_C818339BB39F"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_BC227293_AC15_0B96_41D2_D0DC152B6E3B_0.png"}],"class":"ImageResource","id":"res_BC227293_AC15_0B96_41D2_D0DC152B6E3B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_91F41246_A21D_3023_4195_955A211D1815.source'), '_top')","id":"HotspotPanoramaOverlayArea_A33E91B6_AC15_099F_41CE_5BD54534867F"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942CE511_A22F_103E_41E1_C9981DB7D39E_0.png"}],"class":"ImageResource","id":"res_942CE511_A22F_103E_41E1_C9981DB7D39E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_96C84649_A223_102E_41E2_FB0C4267AB46.source'), '_top')","id":"HotspotPanoramaOverlayArea_909A6B4B_A21D_1021_41B8_6669C843FB21"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942CC511_A22F_103E_41D8_416573B9634E_0.png"}],"class":"ImageResource","id":"res_942CC511_A22F_103E_41D8_416573B9634E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_B4BDC0B4_BB70_92A5_41D4_E85CAD01DD3F.source'), '_top')","id":"HotspotPanoramaOverlayArea_9096E3BF_A223_1061_41B9_6AF72618DA84"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942CA511_A22F_103E_41E3_02769F6702FA_0.png"}],"class":"ImageResource","id":"res_942CA511_A22F_103E_41E3_02769F6702FA"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_97829A01_A225_1021_41A6_C2B810C91256.source'), '_top')","id":"HotspotPanoramaOverlayArea_90AE554A_A225_1023_41E3_0871C26E0E83"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942C9512_A22F_1022_41CE_0F06B100A14A_0.png"}],"class":"ImageResource","id":"res_942C9512_A22F_1022_41CE_0F06B100A14A"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_96DD41B4_A223_1067_41B7_61FCF94F621B.source'), '_top')","id":"HotspotPanoramaOverlayArea_90B46A06_A223_1023_41B1_CF876700AB45"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942C8512_A22F_1022_41D7_36BE1588BF57_0.png"}],"class":"ImageResource","id":"res_942C8512_A22F_1022_41D7_36BE1588BF57"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_96D343F8_A22D_17EE_41D5_1E9A35323073.source'), '_top')","id":"HotspotPanoramaOverlayArea_90BC4F0B_A22D_1022_41E1_DD645A611127"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942C4512_A22F_1022_41D8_0A173F957AD3_0.png"}],"class":"ImageResource","id":"res_942C4512_A22F_1022_41D8_0A173F957AD3"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_96AC4F58_A22F_302F_41E4_2BD8664AA16E.source'), '_top')","id":"HotspotPanoramaOverlayArea_9144E1DD_A22D_1021_41DD_E8E7C91B5C5F"},{"levels":[{"height":231,"width":766,"class":"ImageResourceLevel","url":"media/res_942C3512_A22F_1022_41E0_6250C14EF95E_0.png"}],"class":"ImageResource","id":"res_942C3512_A22F_1022_41E0_6250C14EF95E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_97473ACD_A22F_7021_41BB_6464D62223C4.source'), '_top')","id":"HotspotPanoramaOverlayArea_915DBBDD_A22F_F026_41CF_3CB9B9AC748C"}],"paddingLeft":0,"paddingBottom":0,"downloadEnabled":false,"mouseWheelEnabled":true,"paddingRight":0,"horizontalAlign":"left","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"defaultVRPointer":"laser","backgroundOpacity":1,"height":"100%","verticalAlign":"top","backgroundColor":["#0C2F4A"],"backgroundColorDirection":"vertical","vrPolyfillScale":0.75,"layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","children":["this.MainViewer","this.Container_8A7DEA92_8410_345B_41D4_C9F9ED8E1F8C","this.Container_8F116AD9_9D46_C349_41C9_A798093ECFCD"],"scripts":{"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"translate":TDV.Tour.Script.translate,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"unregisterKey":TDV.Tour.Script.unregisterKey,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMapLocation":TDV.Tour.Script.setMapLocation,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isPanorama":TDV.Tour.Script.isPanorama,"playAudioList":TDV.Tour.Script.playAudioList,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"getKey":TDV.Tour.Script.getKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"registerKey":TDV.Tour.Script.registerKey,"openLink":TDV.Tour.Script.openLink,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"initAnalytics":TDV.Tour.Script.initAnalytics,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showWindow":TDV.Tour.Script.showWindow,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"downloadFile":TDV.Tour.Script.downloadFile,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaByName":TDV.Tour.Script.getMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"shareSocial":TDV.Tour.Script.shareSocial,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initQuiz":TDV.Tour.Script.initQuiz,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizStart":TDV.Tour.Script.quizStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setValue":TDV.Tour.Script.setValue,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPixels":TDV.Tour.Script.getPixels,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setLocale":TDV.Tour.Script.setLocale,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizFinish":TDV.Tour.Script.quizFinish,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"historyGoBack":TDV.Tour.Script.historyGoBack,"existsKey":TDV.Tour.Script.existsKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour},"class":"Player","desktopMipmappingEnabled":false,"start":"this.playAudioList([this.audio_5029A9BD_73F4_485E_41D1_3D07AB7C1BA1], true); this.init()","minHeight":0,"propagateClick":false,"shadow":false,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Sun Oct 9 2022