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
var script = {"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"contentOpaque":false,"children":["this.MainViewer","this.Container_C465E011_84E8_251B_41CA_9C1378BDE457","this.Container_C08B0A5B_84D8_650F_41C8_23A5BF102201","this.Container_C84EDC4A_8438_3D09_41DC_8DA1A0D5AAEC"],"width":"100%","overflow":"hidden","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"paddingTop":0,"id":"rootPlayer","definitions": [{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container45299"},"borderRadius":0,"contentOpaque":false,"width":"68.088%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_C0E6991D_84D8_670B_41A3_9A4CB0E67E6E","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"top":"7.46%","children":["this.WebFrame_C68E1156_84D8_2719_41DB_A8277AEA3F89","this.Container_C5D10433_84D8_2D1F_41CF_015732D21F2D"],"backgroundOpacity":0,"height":"63.727%","verticalAlign":"top","layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"right":"16.65%","minWidth":20,"shadow":false},{"duration":500,"class":"FadeOutEffect","easing":"linear","id":"effect_C6A2B8AC_84D8_2509_41CD_4D57A2E9E576"},{"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"MAP"},"borderRadius":0,"contentOpaque":false,"width":"100%","visible":false,"overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_C84EDC4A_8438_3D09_41DC_8DA1A0D5AAEC","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"backgroundColorRatios":[0],"bottom":"0%","children":["this.Container_C84FFC4B_8438_3D0F_41AC_89432361FF7D"],"backgroundOpacity":0.8,"height":"100%","verticalAlign":"top","backgroundColor":["#000000"],"layout":"absolute","backgroundColorDirection":"vertical","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_C7873FB2_84D8_7B19_41DA_A0632509410B, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_C84EDC4A_8438_3D09_41DC_8DA1A0D5AAEC)","scrollBarColor":"#000000","scrollBarVisible":"rollOver","class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"right":"0%"},{"duration":500,"class":"FadeInEffect","easing":"linear","id":"effect_C183729B_84D8_250F_41C4_10732215213B"},{"duration":500,"class":"FadeInEffect","easing":"linear","id":"effect_CE30CFE6_8438_1B39_41CF_AD09FB3E8062"},{"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"poster"},"borderRadius":0,"contentOpaque":false,"width":"100%","visible":false,"overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_C08B0A5B_84D8_650F_41C8_23A5BF102201","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"backgroundColorRatios":[0],"bottom":"0%","children":["this.Container_C0E6991D_84D8_670B_41A3_9A4CB0E67E6E"],"backgroundOpacity":0.8,"height":"100%","verticalAlign":"top","backgroundColor":["#000000"],"layout":"absolute","backgroundColorDirection":"vertical","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_C7873FB2_84D8_7B19_41DA_A0632509410B, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_C08B0A5B_84D8_650F_41C8_23A5BF102201)","scrollBarColor":"#000000","scrollBarVisible":"rollOver","class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"right":"0%"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"progressLeft":0,"toolTipFontFamily":"Arial","width":"100%","translationTransitionDuration":1000,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowOpacity":1,"subtitlesShadow":false,"subtitlesPaddingTop":5,"id":"MainViewer","paddingLeft":0,"subtitlesEnabled":true,"subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingRight":0,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingBottom":4,"toolTipShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowSpread":0,"toolTipFontWeight":"normal","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","transitionDuration":500,"subtitlesGap":0,"subtitlesTextShadowColor":"#000000","progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"height":"100%","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0,"progressBottom":0,"firstTransitionDuration":0,"playbackBarLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressHeight":10,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarOpacity":1,"subtitlesFontSize":"3vmin","minHeight":50,"playbackBarHeadOpacity":1,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"progressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowHorizontalLength":1,"playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"toolTipFontColor":"#606060","borderRadius":0,"progressRight":0,"minWidth":100,"playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesOpacity":1,"progressOpacity":1,"subtitlesBorderSize":0,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"paddingTop":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","surfaceReticleOpacity":0.6,"paddingBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","subtitlesFontColor":"#FFFFFF","subtitlesFontWeight":"normal","toolTipShadowHorizontalLength":0,"subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"subtitlesPaddingLeft":5,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowHorizontalLength":0,"toolTipOpacity":1,"subtitlesTextShadowOpacity":1,"displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"transitionMode":"blending","toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarRight":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"shadow":false,"subtitlesPaddingRight":5,"subtitlesFontFamily":"Arial","toolTipBorderSize":1},{"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"width":"62.918%","paddingTop":0,"id":"Image_C4C18E35_84E8_3D1B_41DD_878D7E53A8B4","paddingLeft":0,"horizontalAlign":"left","paddingBottom":0,"paddingRight":0,"url":trans('Image_C4C18E35_84E8_3D1B_41DD_878D7E53A8B4.url'),"verticalAlign":"middle","backgroundOpacity":0,"height":"83.516%","click":"this.openLink(this.translate('LinkBehaviour_C775A3FD_84D8_6B08_4185_C1BD55380EB8.source'), '_blank')","class":"Image","minHeight":1,"propagateClick":false,"shadow":false,"minWidth":1,"data":{"name":"Image44120"},"scaleMode":"fit_inside"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container45857"},"borderRadius":0,"contentOpaque":false,"width":"97.978%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_C84F4C4B_8438_3D0F_41DA_83135F260025","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"right","scrollBarOpacity":0,"top":"0%","children":["this.CloseButton_C84CCC4C_8438_3D09_41D6_DEC5064B5007"],"backgroundOpacity":0,"height":"15.917%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"right":"2.02%","minWidth":20,"shadow":false},{"initialPosition":{"yaw":90.18,"class":"PanoramaCameraPosition","hfov":125,"pitch":0.69},"hoverFactor":0,"automaticZoomSpeed":10,"initialSequence":"this.sequence_B9A49ADA_84F8_6509_41CB_FB24A7F9DB28","displayOriginPosition":{"yaw":90.18,"class":"RotationalCameraDisplayPosition","hfov":165,"pitch":-90,"stereographicFactor":1},"class":"PanoramaCamera","displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetStereographicFactor":0,"duration":3000,"targetPitch":0.69,"class":"TargetRotationalCameraDisplayMovement","targetHfov":125}],"id":"panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_camera"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container45857"},"borderRadius":0,"contentOpaque":false,"width":"97.978%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_C5D10433_84D8_2D1F_41CF_015732D21F2D","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"right","scrollBarOpacity":0,"top":"0%","children":["this.CloseButton_C7E5168D_84D8_6D0B_41BC_18CA80FB50C4"],"backgroundOpacity":0,"height":"15.917%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"right":"2.02%","minWidth":20,"shadow":false},{"yaw":-34.86,"loop":false,"audio":"this.audiores_D23C6EB4_8458_1D19_41D6_4DC3BFFC5AD0","class":"DirectionalPanoramaAudio","maximumAngle":129.4,"data":{"label":"air mancur"},"autoplay":true,"pitch":1.84,"id":"audio_D0EF60BC_8458_2509_4181_CD4814EA2146"},{"duration":500,"class":"FadeInEffect","easing":"linear","id":"effect_C65829C5_84D8_277B_41D8_DEB5BCB938F5"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"KONSULTASI"},"borderRadius":0,"contentOpaque":false,"width":"20.588%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_C465E011_84E8_251B_41CA_9C1378BDE457","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"bottom":"87.98%","children":["this.Image_C4C18E35_84E8_3D1B_41DD_878D7E53A8B4"],"backgroundOpacity":0,"height":"10.039%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"right":"77.66%"},{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"overlays":["this.overlay_BB8915AF_84E8_2F08_41CF_CB0B89C64E44","this.overlay_C42DCA7E_84E9_E509_41DA_35712BD95039","this.overlay_C0AC99CD_84D8_670B_41DF_E89B6D3137CE","this.overlay_C60E6040_8428_2579_41CE_0AD5E5D1A383","this.overlay_C7480781_8428_2BFB_41C8_D6D736FF62BC","this.overlay_CC195D3E_8438_1F09_419E_87C4A2F49F94","this.overlay_CC1B41EE_8438_2709_41B1_D81BEC38D796","this.overlay_CFDD0A2F_8438_2507_41C7_4C5426142FC1","this.overlay_D5BC30DB_8428_250F_41DF_E9F8C40821DC","this.overlay_D5B479FA_8429_E709_41D7_63FADB82243D","this.overlay_CE0BD19E_8428_6709_41AB_D53AE3C69DA1","this.overlay_989880D6_8FDB_BCE9_41B4_1944138CD096","this.overlay_9B32C37C_8FDA_BD98_41D4_E519B019E3FC"],"vfov":180,"hfovMax":130,"pitch":0,"id":"panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1","hfovMin":"120%","label":trans('panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1.label'),"data":{"label":"booth"},"partial":false,"frames":[{"cube":{"levels":[{"width":18432,"colCount":36,"url":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":6},{"width":9216,"colCount":18,"url":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":6144,"colCount":12,"url":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_t.jpg"}],"class":"Panorama","thumbnailUrl":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_t.jpg","audios":["this.audio_D0EF60BC_8458_2509_4181_CD4814EA2146"],"hfov":360},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container45299"},"borderRadius":0,"contentOpaque":false,"width":"68.088%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_C84FFC4B_8438_3D0F_41AC_89432361FF7D","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"top":"7.46%","children":["this.WebFrame_C84F6C4B_8438_3D0F_41D0_E83298A9E678","this.Container_C84F4C4B_8438_3D0F_41DA_83135F260025"],"backgroundOpacity":0,"height":"63.727%","verticalAlign":"top","layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"right":"16.65%","minWidth":20,"shadow":false},{"pressedIconColor":"#888888","toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"CloseButton45890"},"borderRadius":0,"fontWeight":"normal","width":40,"iconWidth":"100%","cursor":"hand","paddingTop":5,"id":"CloseButton_C7E5168D_84D8_6D0B_41BC_18CA80FB50C4","fontFamily":"Arial","paddingLeft":5,"shadowSpread":1,"horizontalAlign":"center","paddingBottom":5,"textDecoration":"none","paddingRight":5,"shadowColor":"#000000","iconHeight":"100%","backgroundColorRatios":[0,0.1,1],"rollOverIconColor":"#666666","backgroundOpacity":0.3,"height":40,"iconLineWidth":2,"verticalAlign":"middle","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"layout":"horizontal","iconColor":"#000000","backgroundColorDirection":"vertical","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_C6A2B8AC_84D8_2509_41CD_4D57A2E9E576, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_C08B0A5B_84D8_650F_41C8_23A5BF102201)","fontColor":"#FFFFFF","borderColor":"#000000","fontSize":"1.29vmin","mode":"push","class":"CloseButton","fontStyle":"normal","minHeight":1,"propagateClick":false,"shadow":false,"shadowBlurRadius":6,"minWidth":1,"gap":5},{"duration":500,"class":"FadeOutEffect","easing":"linear","id":"effect_C7873FB2_84D8_7B19_41DA_A0632509410B"},{"autoplay":true,"loop":false,"audio":"this.audiores_D3F34364_8458_EB39_4187_457BF34A50E6","class":"MediaAudio","data":{"label":"SUARA ALAM 2"},"id":"audio_D737E465_8458_6D3B_41D5_961724D8AA9F"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_camera","media":"this.panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1","class":"PanoramaPlayListItem","begin":"this.executeAudioAction([this.audio_D737E465_8458_6D3B_41D5_961724D8AA9F],'play',this.panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1,true,false,false)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"WebFrame45337"},"borderRadius":0,"width":"100%","paddingTop":0,"id":"WebFrame_C68E1156_84D8_2719_41DB_A8277AEA3F89","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"scrollEnabled":true,"url":trans('WebFrame_C68E1156_84D8_2719_41DB_A8277AEA3F89.url'),"backgroundColorRatios":[0],"bottom":"0%","backgroundOpacity":1,"height":"100%","backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","class":"WebFrame","minHeight":1,"propagateClick":false,"shadow":false,"insetBorder":false,"minWidth":1,"right":"0%"},{"pressedIconColor":"#888888","toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"CloseButton45890"},"borderRadius":0,"fontWeight":"normal","width":40,"iconWidth":"100%","cursor":"hand","paddingTop":5,"id":"CloseButton_C84CCC4C_8438_3D09_41D6_DEC5064B5007","fontFamily":"Arial","paddingLeft":5,"shadowSpread":1,"horizontalAlign":"center","paddingBottom":5,"textDecoration":"none","paddingRight":5,"shadowColor":"#000000","iconHeight":"100%","backgroundColorRatios":[0,0.1,1],"rollOverIconColor":"#666666","backgroundOpacity":0.3,"height":40,"iconLineWidth":2,"verticalAlign":"middle","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"layout":"horizontal","iconColor":"#000000","backgroundColorDirection":"vertical","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_C6A2B8AC_84D8_2509_41CD_4D57A2E9E576, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_C84EDC4A_8438_3D09_41DC_8DA1A0D5AAEC)","fontColor":"#FFFFFF","borderColor":"#000000","fontSize":"1.29vmin","mode":"push","class":"CloseButton","fontStyle":"normal","minHeight":1,"propagateClick":false,"shadow":false,"shadowBlurRadius":6,"minWidth":1,"gap":5},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"WebFrame45337"},"borderRadius":0,"width":"100%","paddingTop":0,"id":"WebFrame_C84F6C4B_8438_3D0F_41D0_E83298A9E678","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"scrollEnabled":true,"url":trans('WebFrame_C84F6C4B_8438_3D0F_41D0_E83298A9E678.url'),"backgroundColorRatios":[0],"bottom":"0%","backgroundOpacity":1,"height":"100%","backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","class":"WebFrame","minHeight":1,"propagateClick":false,"shadow":false,"insetBorder":false,"minWidth":1,"right":"0%"},{"id":"sequence_B9A49ADA_84F8_6509_41CB_FB24A7F9DB28","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"mp3Url":trans('audiores_D23C6EB4_8458_1D19_41D6_4DC3BFFC5AD0.mp3Url'),"class":"AudioResource","id":"audiores_D23C6EB4_8458_1D19_41D6_4DC3BFFC5AD0"},{"data":{"label":"Info Red 04"},"maps":[],"items":[{"image":"this.AnimatedImageResource_BC40E08C_A74D_5648_41DC_044D3144152B","distance":100,"yaw":62.94,"pitch":16.62,"vfov":9.02,"class":"HotspotPanoramaOverlayImage","data":{"label":"Info Red 04"},"verticalAlign":"middle","horizontalAlign":"center","hfov":9.46,"scaleMode":"fit_inside"}],"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_BB83F5B2_84E8_2F18_41AB_B8CD6B7AEBAF"],"id":"overlay_BB8915AF_84E8_2F08_41CF_CB0B89C64E44"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BC4E208D_A74D_5648_41CF_DA19C65661FF","distance":50,"vertices":[{"yaw":114.07,"class":"PanoramaPoint","pitch":39.5},{"yaw":138.65,"class":"PanoramaPoint","pitch":30.67},{"yaw":138.48,"class":"PanoramaPoint","pitch":22.24},{"yaw":114.29,"class":"PanoramaPoint","pitch":29.17}],"data":{"label":"INSTAGRAM"},"class":"QuadHotspotPanoramaOverlayImage"}],"useHandCursor":true,"data":{"label":"INSTAGRAM"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C42CDA7F_84E9_E507_4197_2C6BD7CA00E5"],"id":"overlay_C42DCA7E_84E9_E509_41DA_35712BD95039"},{"data":{"label":"Polygon"},"maps":[],"items":[{"image":{"levels":[{"height":317,"width":488,"class":"ImageResourceLevel","url":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_HS_xlsoffhq.png"}],"class":"ImageResource"},"distance":50,"yaw":73.73,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","hfov":21.2,"pitch":12.33,"vfov":13.9}],"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C0BC99DA_84D8_6709_4199_A23BB98265B4"],"id":"overlay_C0AC99CD_84D8_670B_41DF_E89B6D3137CE"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BC4C708E_A74D_5648_41C2_26E6A658FF98","distance":50,"yaw":23.52,"pitch":28.86,"vfov":10.83,"data":{"label":"company"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","horizontalAlign":"center","hfov":27.38,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"company"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C6105044_8428_2579_41C4_D93FE8A3B4E9"],"id":"overlay_C60E6040_8428_2579_41CE_0AD5E5D1A383"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BC4BB08E_A74D_5648_41D6_77D35D307CE7","distance":50,"yaw":157.6,"pitch":8.09,"vfov":19.23,"data":{"label":"FACEBOOK"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","horizontalAlign":"center","hfov":36.66,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"FACEBOOK"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C7579785_8428_2BFB_41DF_57AEFEEDAD81"],"id":"overlay_C7480781_8428_2BFB_41C8_D6D736FF62BC"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_D5F3FB2B_8428_1B08_41D9_F75AFC92491D","distance":50,"yaw":33.37,"pitch":-14.85,"vfov":8.67,"class":"HotspotPanoramaOverlayImage","data":{"label":"maps photoshop"},"verticalAlign":"middle","horizontalAlign":"center","hfov":12.5,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"maps photoshop"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C2582E79_8438_1D0B_41D8_62AD7C301118"],"id":"overlay_CC195D3E_8438_1F09_419E_87C4A2F49F94"},{"data":{"label":"Circle Point 01"},"maps":[],"items":[{"image":"this.AnimatedImageResource_BC4BE08E_A74D_5648_41D3_0C176EF4268E","distance":100,"yaw":33.26,"pitch":-13.12,"vfov":10.22,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Point 01"},"verticalAlign":"middle","horizontalAlign":"center","hfov":10.01,"scaleMode":"fit_inside"}],"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_CC1E31FD_8438_270B_41DE_B05321BDBA7D"],"id":"overlay_CC1B41EE_8438_2709_41B1_D81BEC38D796"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BC49308F_A74D_5648_41E2_D9AB237B9D25","distance":100,"yaw":-6.72,"pitch":-11.44,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 04c"},"roll":9.43,"verticalAlign":"middle","horizontalAlign":"center","hfov":12.5,"vfov":5.21}],"useHandCursor":true,"data":{"label":"Arrow 04c"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_CFCD7A32_8438_2519_41CB_D27C05A7B2D2"],"id":"overlay_CFDD0A2F_8438_2507_41C7_4C5426142FC1"},{"enabledInCardboard":true,"maps":[],"items":["this.HotspotPanoramaOverlayTextImage_D5BC40DB_8428_250F_41CB_71263081964F"],"useHandCursor":true,"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_D5BCD0DC_8428_2509_41D7_547DCBE47556"],"id":"overlay_D5BC30DB_8428_250F_41DF_E9F8C40821DC"},{"yaw":-58.85,"bleachingDistance":0.4,"class":"LensFlarePanoramaOverlay","bleaching":0.7,"pitch":28.12,"id":"overlay_D5B479FA_8429_E709_41D7_63FADB82243D"},{"color":"#FFFFFF","distance":0.5,"speed":0.2,"class":"DustPanoramaOverlay","intensity":0.35,"opacity":0.1,"id":"overlay_CE0BD19E_8428_6709_41AB_D53AE3C69DA1"},{"enabledInCardboard":true,"maps":[],"items":[{"image":{"levels":[{"height":313,"width":489,"class":"ImageResourceLevel","url":"media/panorama_C5051E02_84E8_1CF8_41DE_2FC6390DB1E1_HS_kuvktk0s.png"}],"class":"ImageResource"},"distance":50,"yaw":106.11,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","hfov":21.25,"pitch":12.11,"vfov":13.69}],"useHandCursor":true,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_98A580EF_8FDB_BCB8_41D3_814F305FB543"],"id":"overlay_989880D6_8FDB_BCE9_41B4_1944138CD096"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BC56208F_A74D_5648_41DD_18F46A8CDD7E","distance":100,"yaw":116.52,"pitch":17.46,"vfov":8.66,"class":"HotspotPanoramaOverlayImage","data":{"label":"Info Red 04"},"verticalAlign":"middle","horizontalAlign":"center","hfov":7.31,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"Info Red 04"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9886B39D_8FDA_BC98_41DD_82A483AF6975"],"id":"overlay_9B32C37C_8FDA_BD98_41D4_E519B019E3FC"},{"mp3Url":trans('audiores_D3F34364_8458_EB39_4187_457BF34A50E6.mp3Url'),"class":"AudioResource","id":"audiores_D3F34364_8458_EB39_4187_457BF34A50E6"},{"colCount":4,"frameCount":24,"levels":[{"height":990,"width":660,"class":"ImageResourceLevel","url":"media/res_C5AFB230_84E8_2519_41D1_FA7C67C6ADFB_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BC40E08C_A74D_5648_41DC_044D3144152B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_C65829C5_84D8_277B_41D8_DEB5BCB938F5, 'showEffect', false)}.bind(this); visibleFunc(this.Container_C08B0A5B_84D8_650F_41C8_23A5BF102201)","id":"HotspotPanoramaOverlayArea_BB83F5B2_84E8_2F18_41AB_B8CD6B7AEBAF"},{"colCount":9,"frameCount":99,"levels":[{"height":2541,"width":6894,"class":"ImageResourceLevel","url":"media/res_D5F34B2A_8428_1B08_41D7_65474199D05C_0.png"}],"class":"AnimatedImageResource","frameDuration":40,"rowCount":11,"id":"AnimatedImageResource_BC4E208D_A74D_5648_41CF_DA19C65661FF"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_C637E9F2_84E8_E718_41AC_349F6C28CC7B.source'), '_blank')","id":"HotspotPanoramaOverlayArea_C42CDA7F_84E9_E507_4197_2C6BD7CA00E5"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_C183729B_84D8_250F_41C4_10732215213B, 'showEffect', false)}.bind(this); visibleFunc(this.Container_C08B0A5B_84D8_650F_41C8_23A5BF102201)","id":"HotspotPanoramaOverlayArea_C0BC99DA_84D8_6709_4199_A23BB98265B4"},{"colCount":9,"frameCount":99,"levels":[{"height":2541,"width":6894,"class":"ImageResourceLevel","url":"media/res_D5F3BB2A_8428_1B08_41D7_3089DC723F24_0.png"}],"class":"AnimatedImageResource","frameDuration":40,"rowCount":11,"id":"AnimatedImageResource_BC4C708E_A74D_5648_41C2_26E6A658FF98"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_C2558CFC_8428_1D08_4168_4F9DD9ADCC6C.source'), '_blank')","id":"HotspotPanoramaOverlayArea_C6105044_8428_2579_41C4_D93FE8A3B4E9"},{"colCount":9,"frameCount":99,"levels":[{"height":2541,"width":6894,"class":"ImageResourceLevel","url":"media/res_D5F3AB2B_8428_1B08_41DF_C40E77FEBCC3_0.png"}],"class":"AnimatedImageResource","frameDuration":40,"rowCount":11,"id":"AnimatedImageResource_BC4BB08E_A74D_5648_41D6_77D35D307CE7"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_CDEFEC04_8428_1CF9_41E0_1C16F1651183.source'), '_blank')","id":"HotspotPanoramaOverlayArea_C7579785_8428_2BFB_41DF_57AEFEEDAD81"},{"levels":[{"height":279,"width":402,"class":"ImageResourceLevel","url":"media/res_D5F3FB2B_8428_1B08_41D9_F75AFC92491D_0.png"}],"class":"ImageResource","id":"res_D5F3FB2B_8428_1B08_41D9_F75AFC92491D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C2582E79_8438_1D0B_41D8_62AD7C301118"},{"colCount":4,"frameCount":24,"levels":[{"height":1800,"width":1200,"class":"ImageResourceLevel","url":"media/res_D5F3EB2B_8428_1B08_41C2_655CAE2685F8_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BC4BE08E_A74D_5648_41D3_0C176EF4268E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_CE30CFE6_8438_1B39_41CF_AD09FB3E8062, 'showEffect', false)}.bind(this); visibleFunc(this.Container_C84EDC4A_8438_3D09_41DC_8DA1A0D5AAEC)","id":"HotspotPanoramaOverlayArea_CC1E31FD_8438_270B_41DE_B05321BDBA7D"},{"colCount":4,"frameCount":21,"levels":[{"height":300,"width":480,"class":"ImageResourceLevel","url":"media/res_D5F3DB2B_8428_1B08_41A6_E23D6C541E8F_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BC49308F_A74D_5648_41E2_D9AB237B9D25"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_CA9B33AE_8428_6B09_41DB_491A66930580.source'), '_top')","id":"HotspotPanoramaOverlayArea_CFCD7A32_8438_2519_41CB_D27C05A7B2D2"},{"vfov":9.27,"roll":3.15,"horizontalAlign":"center","pitch":-18.35,"id":"HotspotPanoramaOverlayTextImage_D5BC40DB_8428_250F_41CB_71263081964F","image":{"levels":["this.imlevel_BC65AF2A_A74D_6A49_41C6_1BDD560478F9"],"class":"ImageResource"},"distance":50,"yaw":-4.65,"class":"HotspotPanoramaOverlayImage","data":{"label":"Text"},"verticalAlign":"middle","hfov":24.26},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_C82860B9_8428_250B_4188_F5F941D09189.source'), '_top')","id":"HotspotPanoramaOverlayArea_D5BCD0DC_8428_2509_41D7_547DCBE47556"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_99AB9BC8_8FDA_8CF8_41CD_4872AD7DF970.source'), '_blank')","id":"HotspotPanoramaOverlayArea_98A580EF_8FDB_BCB8_41D3_814F305FB543"},{"colCount":4,"frameCount":24,"levels":[{"height":990,"width":660,"class":"ImageResourceLevel","url":"media/res_C5AFB230_84E8_2519_41D1_FA7C67C6ADFB_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BC56208F_A74D_5648_41DD_18F46A8CDD7E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_99AA69C6_8FDA_8CE9_41DC_AD7B85B1D147.source'), '_blank')","id":"HotspotPanoramaOverlayArea_9886B39D_8FDA_BC98_41DD_82A483AF6975"},{"height":416.59,"width":1103.98,"class":"ImageResourceLevel","url":trans('imlevel_BC65AF2A_A74D_6A49_41C6_1BDD560478F9.url'),"id":"imlevel_BC65AF2A_A74D_6A49_41C6_1BDD560478F9"}],"paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"downloadEnabled":false,"mouseWheelEnabled":true,"paddingRight":0,"horizontalAlign":"left","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"backgroundOpacity":1,"height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#0C2F4A"],"backgroundColorDirection":"vertical","vrPolyfillScale":0.75,"layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scripts":{"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"showWindow":TDV.Tour.Script.showWindow,"clone":TDV.Tour.Script.clone,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"existsKey":TDV.Tour.Script.existsKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeJS":TDV.Tour.Script.executeJS,"quizStart":TDV.Tour.Script.quizStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPixels":TDV.Tour.Script.getPixels,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"isPanorama":TDV.Tour.Script.isPanorama,"playAudioList":TDV.Tour.Script.playAudioList,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot},"class":"Player","desktopMipmappingEnabled":false,"start":"this.init()","minHeight":0,"propagateClick":false,"shadow":false,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","minWidth":0,"data":{"defaultLocale":"en","name":"Player40750","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Wed Oct 5 2022