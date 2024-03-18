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
var script = {"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"contentOpaque":false,"children":["this.MainViewer","this.Container_9FE4A401_8428_ECF8_41A7_1C61C7494D3A","this.Container_9B3491C6_8428_6779_41D2_64D4F2DE6824"],"width":"100%","overflow":"hidden","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"paddingTop":0,"id":"rootPlayer","definitions": [{"autoplay":true,"loop":false,"audio":"this.audiores_A3599852_8428_2519_41DC_626DAD138338","class":"MediaAudio","data":{"label":"suara alam"},"id":"audio_A7E0203B_8428_650F_41E0_46D0F8E1A3A3"},{"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"map"},"borderRadius":0,"contentOpaque":false,"width":"100%","visible":false,"overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_9B3491C6_8428_6779_41D2_64D4F2DE6824","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0.5,"backgroundColorRatios":[0],"bottom":"0%","children":["this.Container_98E942FE_8437_E509_41AE_98C18C452758"],"backgroundOpacity":0.8,"height":"100%","verticalAlign":"top","backgroundColor":["#000000"],"layout":"absolute","backgroundColorDirection":"vertical","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_A4B6786B_842B_E508_41CF_8A2DDF49D4F0, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_9B3491C6_8428_6779_41D2_64D4F2DE6824)","scrollBarColor":"#000000","scrollBarVisible":"rollOver","class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"right":"0%"},{"duration":500,"class":"FadeOutEffect","easing":"linear","id":"effect_A5FB0302_8428_64F9_41C6_C3AD2E64649F"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"progressLeft":0,"toolTipFontFamily":"Arial","width":"100%","translationTransitionDuration":1000,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowOpacity":1,"subtitlesShadow":false,"subtitlesPaddingTop":5,"id":"MainViewer","paddingLeft":0,"subtitlesEnabled":true,"subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingRight":0,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingBottom":4,"toolTipShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowSpread":0,"toolTipFontWeight":"normal","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","transitionDuration":500,"subtitlesGap":0,"subtitlesTextShadowColor":"#000000","progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"height":"100%","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0,"progressBottom":0,"firstTransitionDuration":0,"playbackBarLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressHeight":10,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarOpacity":1,"subtitlesFontSize":"3vmin","minHeight":50,"playbackBarHeadOpacity":1,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"progressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowHorizontalLength":1,"playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"toolTipFontColor":"#606060","borderRadius":0,"progressRight":0,"minWidth":100,"playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesOpacity":1,"progressOpacity":1,"subtitlesBorderSize":0,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"paddingTop":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","surfaceReticleOpacity":0.6,"paddingBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","subtitlesFontColor":"#FFFFFF","subtitlesFontWeight":"normal","toolTipShadowHorizontalLength":0,"subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"subtitlesPaddingLeft":5,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowHorizontalLength":0,"toolTipOpacity":1,"subtitlesTextShadowOpacity":1,"displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"transitionMode":"blending","toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarRight":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"shadow":false,"subtitlesPaddingRight":5,"subtitlesFontFamily":"Arial","toolTipBorderSize":1},{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"width":"56.688%","paddingTop":0,"id":"Image_9D2858B5_8428_651B_41DC_49EE59DD759C","paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"url":trans('Image_9D2858B5_8428_651B_41DC_49EE59DD759C.url'),"verticalAlign":"middle","backgroundOpacity":0,"height":"46.939%","click":"this.openLink(this.translate('LinkBehaviour_9E3152FB_8428_650F_41E0_3D5B51765C75.source'), '_blank')","class":"Image","minHeight":1,"propagateClick":false,"shadow":false,"minWidth":1,"data":{"name":"Image6284"},"scaleMode":"fit_inside"},{"initialPosition":{"yaw":90.93,"class":"PanoramaCameraPosition","hfov":120,"pitch":0.69},"hoverFactor":0,"automaticZoomSpeed":10,"initialSequence":"this.sequence_9C9C1B4F_842F_FB07_41C6_DE9F1CD0A2B0","displayOriginPosition":{"yaw":90.93,"class":"RotationalCameraDisplayPosition","hfov":165,"pitch":-90,"stereographicFactor":1},"class":"PanoramaCamera","displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetStereographicFactor":0,"duration":3000,"targetPitch":0.69,"class":"TargetRotationalCameraDisplayMovement","targetHfov":120}],"id":"panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_camera"},{"duration":500,"class":"FadeOutEffect","easing":"linear","id":"effect_A4B6786B_842B_E508_41CF_8A2DDF49D4F0"},{"pressedIconColor":"#888888","toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"CloseButton12526"},"borderRadius":0,"fontWeight":"normal","width":40,"iconWidth":"100%","cursor":"hand","paddingTop":5,"id":"CloseButton_A53B4844_8428_2578_41D8_A88998D32213","fontFamily":"Arial","paddingLeft":5,"shadowSpread":1,"horizontalAlign":"center","paddingBottom":5,"textDecoration":"none","paddingRight":5,"shadowColor":"#000000","iconHeight":"100%","backgroundColorRatios":[0,0.1,1],"rollOverIconColor":"#666666","backgroundOpacity":0.3,"height":40,"iconLineWidth":2,"verticalAlign":"middle","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"layout":"horizontal","iconColor":"#000000","backgroundColorDirection":"vertical","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_A5FB0302_8428_64F9_41C6_C3AD2E64649F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_9B3491C6_8428_6779_41D2_64D4F2DE6824)","fontColor":"#FFFFFF","borderColor":"#000000","fontSize":"1.29vmin","mode":"push","class":"CloseButton","fontStyle":"normal","minHeight":1,"propagateClick":false,"shadow":false,"shadowBlurRadius":6,"minWidth":1,"gap":5},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"CONTACT"},"borderRadius":0,"gap":10,"width":"29.474%","overflow":"scroll","paddingTop":0,"id":"Container_9FE4A401_8428_ECF8_41A7_1C61C7494D3A","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"top":"0%","children":["this.Image_9D2858B5_8428_651B_41DC_49EE59DD759C"],"backgroundOpacity":0,"height":"10.474%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","left":"0%","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"contentOpaque":false},{"duration":500,"class":"FadeInEffect","easing":"linear","id":"effect_A72DE11D_8428_270B_41DD_5A33E70A66F2"},{"overlays":["this.overlay_FB955176_A291_05AF_41D7_93CA621703D1","this.overlay_FB952176_A291_05AF_41DA_F53B5B8D905F","this.overlay_FB953176_A291_05AF_41A2_7BD366AF49E1","this.overlay_FB950176_A291_05AF_41D3_E2D4E67F9BCE","this.overlay_FB951176_A291_05AF_41B9_D91B06721101","this.overlay_FB95E176_A291_05AF_41DC_E1BC1DCF1356","this.overlay_FB95F176_A291_05AF_41C9_BA2ED3925647","this.overlay_FB969177_A291_05AD_41DF_78776A5C27CC","this.overlay_FB956177_A291_05AD_41E0_0BB9BA7C76CA","this.overlay_FB957177_A291_05AD_41DD_E6911654E999"],"vfov":180,"hfovMax":130,"pitch":0,"id":"panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09","hfovMin":"120%","label":trans('panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09.label'),"data":{"label":"PAI"},"partial":false,"frames":[{"cube":{"levels":[{"width":18432,"colCount":36,"url":"media/panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":6},{"width":9216,"colCount":18,"url":"media/panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":6144,"colCount":12,"url":"media/panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_t.jpg"}],"class":"Panorama","thumbnailUrl":"media/panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_t.jpg","audios":["this.audio_A785A847_8438_E507_41B9_5D6492928AB2"],"hfov":360},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container12493"},"borderRadius":0,"contentOpaque":false,"width":"98.593%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_9B9F83ED_8428_6B08_41D5_F05FAE96CE6C","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"right","scrollBarOpacity":0,"top":"0%","children":["this.CloseButton_A53B4844_8428_2578_41D8_A88998D32213"],"backgroundOpacity":0,"height":"11.871%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"right":"1.41%","minWidth":20,"shadow":false},{"yaw":3.41,"loop":false,"audio":"this.audiores_A37493C8_8428_2B09_41D3_7C297136F33D","class":"DirectionalPanoramaAudio","maximumAngle":53.36,"data":{"label":"air mancur"},"autoplay":true,"pitch":2.36,"id":"audio_A785A847_8438_E507_41B9_5D6492928AB2"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container7555"},"borderRadius":0,"contentOpaque":false,"width":"62.268%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_98E942FE_8437_E509_41AE_98C18C452758","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0.5,"bottom":"30.76%","children":["this.WebFrame_9A5DC8CC_8438_6509_41CC_DC1456841715","this.Container_9B9F83ED_8428_6B08_41D5_F05FAE96CE6C"],"backgroundOpacity":0,"height":"61.307%","verticalAlign":"top","layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"right":"19.4%"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09_camera","media":"this.panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09","class":"PanoramaPlayListItem","begin":"this.executeAudioAction([this.audio_A7E0203B_8428_650F_41E0_46D0F8E1A3A3],'play',this.panorama_FB96B170_A291_05A3_41B8_1139C4C7CB09,true,false,false)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"WebFrame7787"},"borderRadius":0,"width":"100%","paddingTop":0,"id":"WebFrame_9A5DC8CC_8438_6509_41CC_DC1456841715","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"scrollEnabled":true,"url":trans('WebFrame_9A5DC8CC_8438_6509_41CC_DC1456841715.url'),"backgroundColorRatios":[0],"bottom":"0%","backgroundOpacity":1,"height":"100%","backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","class":"WebFrame","minHeight":1,"propagateClick":false,"shadow":false,"insetBorder":false,"minWidth":1,"right":"0%"},{"mp3Url":trans('audiores_A3599852_8428_2519_41DC_626DAD138338.mp3Url'),"class":"AudioResource","id":"audiores_A3599852_8428_2519_41DC_626DAD138338"},{"id":"sequence_9C9C1B4F_842F_FB07_41C6_DE9F1CD0A2B0","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BD4E78D4_A747_57D8_41D8_06AFE0F26D59","distance":100,"yaw":42.83,"pitch":20.14,"vfov":6.9,"class":"HotspotPanoramaOverlayImage","data":{"label":"Info Red 02"},"verticalAlign":"middle","horizontalAlign":"center","hfov":5.48,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"Info Red 02"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_99A50665_8438_2D3B_41C8_927D265A454C"],"id":"overlay_FB955176_A291_05AF_41D7_93CA621703D1"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BD4E58D4_A747_57D8_4195_96633D41C80A","distance":100,"yaw":138.1,"pitch":20.78,"vfov":6.33,"class":"HotspotPanoramaOverlayImage","data":{"label":"Info Red 02"},"verticalAlign":"middle","horizontalAlign":"center","hfov":5.55,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"Info Red 02"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9A493743_8438_6B7F_41E0_6DD39DE150BC"],"id":"overlay_FB952176_A291_05AF_41DA_F53B5B8D905F"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BD4EB8D4_A747_57D8_41D1_DDD36992E5C6","distance":50,"yaw":148.29,"pitch":21,"vfov":8.73,"data":{"label":"official-instagram"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","horizontalAlign":"center","hfov":23.53,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"official-instagram"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9960A47F_8438_2D07_41A2_7036452D3E9F"],"id":"overlay_FB953176_A291_05AF_41A2_7BD366AF49E1"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BD4E98D5_A747_57D8_41B1_24DF66B2ADCE","distance":50,"yaw":34.14,"pitch":21.82,"vfov":11.49,"data":{"label":"YOUTUBE"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","horizontalAlign":"center","hfov":20.76,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"YOUTUBE"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_995C4B79_8438_3B0B_41D5_A0D6B6843486"],"id":"overlay_FB950176_A291_05AF_41D3_E2D4E67F9BCE"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_A2C919FD_8428_670B_41C0_80F4CE611AC8","distance":50,"yaw":-49.68,"pitch":-19.83,"vfov":13,"class":"HotspotPanoramaOverlayImage","data":{"label":"maps photoshop"},"verticalAlign":"middle","horizontalAlign":"center","hfov":15.74,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"maps photoshop"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9BEAD63A_8437_ED09_41D7_BB6AF4DCD458"],"id":"overlay_FB951176_A291_05AF_41B9_D91B06721101"},{"data":{"label":"Circle Point 01"},"maps":[],"items":[{"image":"this.AnimatedImageResource_BD4EC8D5_A747_57D8_41DF_85F867F432FA","distance":100,"yaw":-49.82,"pitch":-17.62,"vfov":12,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Point 01"},"verticalAlign":"middle","horizontalAlign":"center","hfov":12,"scaleMode":"fit_inside"}],"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A4C5EA54_8428_6518_41B7_37CA71819042"],"id":"overlay_FB95E176_A291_05AF_41DC_E1BC1DCF1356"},{"yaw":-51.77,"bleachingDistance":0.46,"class":"LensFlarePanoramaOverlay","bleaching":0.72,"pitch":25.76,"id":"overlay_FB95F176_A291_05AF_41C9_BA2ED3925647"},{"color":"#FFFFFF","distance":0.5,"speed":0.2,"class":"DustPanoramaOverlay","intensity":0.3,"opacity":0.1,"id":"overlay_FB969177_A291_05AD_41DF_78776A5C27CC"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_BD5168D5_A747_57D8_41D2_03ED4CD2904D","distance":100,"yaw":158.36,"pitch":-11.43,"vfov":7,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 04b"},"verticalAlign":"middle","horizontalAlign":"center","hfov":12,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"Arrow 04b"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_A3C7899C_8428_2708_41D8_29A148CB4A2B"],"id":"overlay_FB956177_A291_05AD_41E0_0BB9BA7C76CA"},{"enabledInCardboard":true,"maps":[],"items":["this.HotspotPanoramaOverlayTextImage_AC8C32A9_8428_650B_41D2_2A7AA816CB5C"],"useHandCursor":true,"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_ACD372E6_8428_6539_41D5_398D1C025AA4"],"id":"overlay_FB957177_A291_05AD_41DD_E6911654E999"},{"mp3Url":trans('audiores_A37493C8_8428_2B09_41D3_7C297136F33D.mp3Url'),"class":"AudioResource","id":"audiores_A37493C8_8428_2B09_41D3_7C297136F33D"},{"colCount":4,"frameCount":24,"levels":[{"height":1020,"width":680,"class":"ImageResourceLevel","url":"media/res_A2C9B9FD_8428_670B_41BB_0EA774B9B958_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BD4E78D4_A747_57D8_41D8_06AFE0F26D59"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_99410476_8438_2D19_41A2_09CC90B31BC2.source'), '_blank')","id":"HotspotPanoramaOverlayArea_99A50665_8438_2D3B_41C8_927D265A454C"},{"colCount":4,"frameCount":24,"levels":[{"height":1020,"width":680,"class":"ImageResourceLevel","url":"media/res_A2C9B9FD_8428_670B_41BB_0EA774B9B958_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BD4E58D4_A747_57D8_4195_96633D41C80A"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_998AFA6A_843B_E509_41C6_D4E7C5B8947E.source'), '_blank')","id":"HotspotPanoramaOverlayArea_9A493743_8438_6B7F_41E0_6DD39DE150BC"},{"colCount":9,"frameCount":99,"levels":[{"height":2541,"width":6894,"class":"ImageResourceLevel","url":"media/res_A2C959FD_8428_670B_41CA_106A9CAC1530_0.png"}],"class":"AnimatedImageResource","frameDuration":40,"rowCount":11,"id":"AnimatedImageResource_BD4EB8D4_A747_57D8_41D1_DDD36992E5C6"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_A4015E5E_843F_FD08_41C2_36DB8E0B6CBD.source'), '_blank')","id":"HotspotPanoramaOverlayArea_9960A47F_8438_2D07_41A2_7036452D3E9F"},{"colCount":9,"frameCount":99,"levels":[{"height":2233,"width":6057,"class":"ImageResourceLevel","url":"media/res_A2C979FD_8428_670B_41DE_2939511E3A64_0.png"}],"class":"AnimatedImageResource","frameDuration":40,"rowCount":11,"id":"AnimatedImageResource_BD4E98D5_A747_57D8_41B1_24DF66B2ADCE"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_9B2D1B10_8438_1B18_41DC_DE5CEF34621B.source'), '_blank')","id":"HotspotPanoramaOverlayArea_995C4B79_8438_3B0B_41D5_A0D6B6843486"},{"levels":[{"height":352,"width":508,"class":"ImageResourceLevel","url":"media/res_A2C919FD_8428_670B_41C0_80F4CE611AC8_0.png"}],"class":"ImageResource","id":"res_A2C919FD_8428_670B_41C0_80F4CE611AC8"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9BEAD63A_8437_ED09_41D7_BB6AF4DCD458"},{"colCount":4,"frameCount":24,"levels":[{"height":1800,"width":1200,"class":"ImageResourceLevel","url":"media/res_A2C909FD_8428_670B_41D9_77B929D46498_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BD4EC8D5_A747_57D8_41DF_85F867F432FA"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_A72DE11D_8428_270B_41DD_5A33E70A66F2, 'showEffect', false)}.bind(this); visibleFunc(this.Container_9B3491C6_8428_6779_41D2_64D4F2DE6824)","id":"HotspotPanoramaOverlayArea_A4C5EA54_8428_6518_41B7_37CA71819042"},{"colCount":4,"frameCount":21,"levels":[{"height":420,"width":480,"class":"ImageResourceLevel","url":"media/res_AD239031_8428_251B_415F_F1E1D1A72820_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_BD5168D5_A747_57D8_41D2_03ED4CD2904D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_A38B58AB_8428_250F_41C1_B75461464A08.source'), '_top')","id":"HotspotPanoramaOverlayArea_A3C7899C_8428_2708_41D8_29A148CB4A2B"},{"horizontalAlign":"center","pitch":-15.72,"id":"HotspotPanoramaOverlayTextImage_AC8C32A9_8428_650B_41D2_2A7AA816CB5C","image":{"levels":["this.imlevel_F884F1C0_A291_04E2_41D2_6AEF541F4B2C"],"class":"ImageResource"},"distance":50,"yaw":158.11,"class":"HotspotPanoramaOverlayImage","data":{"label":"Text"},"verticalAlign":"middle","hfov":20.52,"vfov":5.47},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_AE2343EA_8428_2B09_41B7_AF687225900D.source'), '_top')","id":"HotspotPanoramaOverlayArea_ACD372E6_8428_6539_41D5_398D1C025AA4"},{"height":246.52,"width":933.91,"class":"ImageResourceLevel","url":trans('imlevel_F884F1C0_A291_04E2_41D2_6AEF541F4B2C.url'),"id":"imlevel_F884F1C0_A291_04E2_41D2_6AEF541F4B2C"}],"paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"downloadEnabled":false,"mouseWheelEnabled":true,"paddingRight":0,"horizontalAlign":"left","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"backgroundOpacity":1,"height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#0C2F4A"],"backgroundColorDirection":"vertical","vrPolyfillScale":0.75,"layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scripts":{"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"showWindow":TDV.Tour.Script.showWindow,"clone":TDV.Tour.Script.clone,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"existsKey":TDV.Tour.Script.existsKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeJS":TDV.Tour.Script.executeJS,"quizStart":TDV.Tour.Script.quizStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPixels":TDV.Tour.Script.getPixels,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"isPanorama":TDV.Tour.Script.isPanorama,"playAudioList":TDV.Tour.Script.playAudioList,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot},"class":"Player","desktopMipmappingEnabled":false,"start":"this.init()","minHeight":0,"propagateClick":false,"shadow":false,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","minWidth":0,"data":{"defaultLocale":"en","name":"Player5855","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Wed Oct 5 2022