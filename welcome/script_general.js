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
var script = {"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"contentOpaque":false,"children":["this.MainViewer","this.Container_7788B77D_796C_2AE8_41D0_2314C63B9293","this.Container_9AEB63CA_8CE9_4E4B_41DA_BC50077D8383"],"width":"100%","overflow":"hidden","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"paddingTop":0,"id":"rootPlayer","definitions": [{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.executeFunctionWhenChange(this.mainPlayList, 0, function(){this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BD03EDE2_A77B_69F8_41E1_E96ADEDC3029, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV);this.mainPlayList.set('selectedIndex', 1)}); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_88C25972_85D6_EFC8_41C4_E3C9EC2E0A71","class":"VideoPlayListItem","start":"this._initItemWithComps(this.mainPlayList, 0, [this.Container_7788B77D_796C_2AE8_41D0_2314C63B9293], 'begin', true, this.FadeInEffect_6A9A18B5_7974_2678_41C7_29BAEE415ED4, 4000, 0); this._initItemWithComps(this.mainPlayList, 0, [this.Container_7788B77D_796C_2AE8_41D0_2314C63B9293], 'end', false, this.FadeOutEffect_6A9A38B6_7974_2678_41C9_06BD8CE8C88B, 0, 0); this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.MainViewerVideoPlayer.set('displayPlayOverlay', false); this.MainViewerVideoPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000')"},"this.PanoramaPlayListItem_BD03EDE2_A77B_69F8_41E1_E96ADEDC3029"],"id":"mainPlayList"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"welcomebutton"},"borderRadius":0,"contentOpaque":false,"width":"100%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_9F21605B_8CE9_4A4A_41C0_FE5C929B3CBF","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","scrollBarOpacity":0,"bottom":"22.05%","children":["this.Button_9F8F6E1B_8CE9_79CA_419B_E6E31F410B18","this.Container_8F500C77_A22F_30E2_41DC_964EF8A440E6","this.Button_8EE74BC6_A22F_1023_41DE_31DEB22FDFF6","this.Container_8D02CD86_A22D_3023_41B9_C42932FA6940","this.Button_8EFD2826_A22F_1063_41A2_238BEFFC46B3"],"backgroundOpacity":0,"height":"8.6%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"right":"0%"},{"duration":1000,"from":"top","class":"SlideInEffect","easing":"linear","id":"SlideInEffect_95EB71B7_8CF8_CAD9_41C7_CD6D12BE512C"},{"duration":1000,"class":"FadeInEffect","easing":"cubic_in_out","id":"FadeInEffect_6A9A18B5_7974_2678_41C7_29BAEE415ED4"},{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"toolTipHorizontalAlign":"center","rollOverFontFamily":"Roboto","borderSize":0,"data":{"name":"Button house info"},"rollOverBackgroundColor":["#00CC33"],"borderRadius":0,"fontWeight":"bold","gap":5,"width":160,"iconWidth":0,"rollOverFontColor":"#000000","cursor":"hand","paddingTop":0,"id":"Button_8EFD2826_A22F_1063_41A2_238BEFFC46B3","fontFamily":"Roboto","paddingLeft":0,"shadowSpread":1,"horizontalAlign":"center","paddingBottom":0,"textDecoration":"none","paddingRight":0,"shadowColor":"#000000","iconHeight":0,"rollOverShadow":false,"backgroundColorRatios":[0],"backgroundOpacity":1,"height":50,"verticalAlign":"middle","backgroundColor":["#0F365B"],"pressedBackgroundColorRatios":[0],"layout":"horizontal","pressedBackgroundOpacity":1,"backgroundColorDirection":"vertical","click":"this.openLink(this.translate('LinkBehaviour_8EFFF827_A22F_1061_41E3_7D4DF4F7237F.source'), '_top')","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","borderColor":"#000000","fontSize":"1.5vh","rollOverFontSize":"1.323042998897464vh","mode":"push","class":"Button","label":trans('Button_8EFD2826_A22F_1063_41A2_238BEFFC46B3.label'),"fontStyle":"normal","minHeight":1,"rollOverBackgroundOpacity":1,"propagateClick":false,"shadow":false,"iconBeforeLabel":true,"shadowBlurRadius":15,"minWidth":1,"pressedBackgroundColor":["#BBD149"]},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"progressLeft":0,"toolTipFontFamily":"Arial","width":"100%","translationTransitionDuration":1000,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowOpacity":1,"subtitlesShadow":false,"subtitlesPaddingTop":5,"id":"MainViewer","paddingLeft":0,"subtitlesEnabled":true,"subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingRight":0,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingBottom":4,"toolTipShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowSpread":0,"toolTipFontWeight":"normal","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","transitionDuration":500,"subtitlesGap":0,"subtitlesTextShadowColor":"#000000","progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"height":"100%","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0,"progressBottom":0,"firstTransitionDuration":0,"playbackBarLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressHeight":10,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarOpacity":1,"subtitlesFontSize":"3vmin","minHeight":50,"playbackBarHeadOpacity":1,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"progressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowHorizontalLength":1,"playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"toolTipFontColor":"#606060","borderRadius":0,"progressRight":0,"minWidth":100,"playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesOpacity":1,"progressOpacity":1,"subtitlesBorderSize":0,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"paddingTop":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","surfaceReticleOpacity":0.6,"paddingBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","subtitlesFontColor":"#FFFFFF","subtitlesFontWeight":"normal","toolTipShadowHorizontalLength":0,"subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"subtitlesPaddingLeft":5,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowHorizontalLength":0,"toolTipOpacity":1,"subtitlesTextShadowOpacity":1,"displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"transitionMode":"blending","toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarRight":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"shadow":false,"subtitlesPaddingRight":5,"subtitlesFontFamily":"Arial","toolTipBorderSize":1},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container14409"},"borderRadius":0,"gap":10,"width":"4.506%","overflow":"scroll","paddingTop":0,"id":"Container_8D02CD86_A22D_3023_41B9_C42932FA6940","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"backgroundOpacity":0,"height":"100%","verticalAlign":"top","layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"contentOpaque":false},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_camera"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"SKIP"},"borderRadius":0,"contentOpaque":false,"width":"100%","overflow":"scroll","gap":10,"visible":false,"paddingTop":0,"id":"Container_7788B77D_796C_2AE8_41D0_2314C63B9293","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","scrollBarOpacity":0.5,"bottom":"6.39%","children":["this.Button_77BBCAA0_7974_DA18_41B5_953C26D60536"],"backgroundOpacity":0,"height":"17.089%","verticalAlign":"middle","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"right":"0%"},{"duration":1000,"class":"SlideOutEffect","easing":"linear","to":"top","id":"SlideOutEffect_95EB71B7_8CF8_CAD9_41A6_1889365DD448"},{"toolTipHorizontalAlign":"center","rollOverFontFamily":"Roboto","borderSize":0,"data":{"name":"Button house info"},"rollOverBackgroundColor":["#00CC33"],"borderRadius":0,"fontWeight":"bold","gap":5,"width":160,"iconWidth":0,"rollOverFontColor":"#000000","cursor":"hand","paddingTop":0,"id":"Button_8EE74BC6_A22F_1023_41DE_31DEB22FDFF6","fontFamily":"Roboto","paddingLeft":0,"shadowSpread":1,"horizontalAlign":"center","paddingBottom":0,"textDecoration":"none","paddingRight":0,"shadowColor":"#000000","iconHeight":0,"rollOverShadow":false,"backgroundColorRatios":[0],"backgroundOpacity":1,"height":50,"verticalAlign":"middle","backgroundColor":["#0F365B"],"pressedBackgroundColorRatios":[0],"layout":"horizontal","pressedBackgroundOpacity":1,"backgroundColorDirection":"vertical","click":"this.openLink(this.translate('LinkBehaviour_8F191BC7_A22F_1021_41D7_AAA596C5C85C.source'), '_top')","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","borderColor":"#000000","fontSize":"1.5vh","rollOverFontSize":"1.323042998897464vh","mode":"push","class":"Button","label":trans('Button_8EE74BC6_A22F_1023_41DE_31DEB22FDFF6.label'),"fontStyle":"normal","minHeight":1,"rollOverBackgroundOpacity":1,"propagateClick":false,"shadow":false,"iconBeforeLabel":true,"shadowBlurRadius":15,"minWidth":1,"pressedBackgroundColor":["#BBD149"]},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"welcome-container"},"borderRadius":0,"gap":10,"width":"100%","overflow":"scroll","visible":false,"paddingTop":0,"id":"Container_9AEB63CA_8CE9_4E4B_41DA_BC50077D8383","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","scrollBarOpacity":0,"top":"0%","bottom":"0%","children":["this.Container_9F9A65A8_8CE8_CAF6_41D1_E9F4AE9E58A0","this.Container_9F21605B_8CE9_4A4A_41C0_FE5C929B3CBF"],"backgroundOpacity":0,"layout":"absolute","verticalAlign":"middle","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","left":"0%","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"contentOpaque":false},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container14409"},"borderRadius":0,"gap":10,"width":"4.506%","overflow":"scroll","paddingTop":0,"id":"Container_8F500C77_A22F_30E2_41DC_964EF8A440E6","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarOpacity":0,"backgroundOpacity":0,"height":"100%","verticalAlign":"top","layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"shadow":false,"minWidth":20,"contentOpaque":false},{"toolTipHorizontalAlign":"center","rollOverFontFamily":"Roboto","borderSize":0,"data":{"name":"Button house info"},"rollOverBackgroundColor":["#00CC33"],"borderRadius":0,"fontWeight":"bold","gap":5,"width":160,"iconWidth":0,"rollOverFontColor":"#000000","cursor":"hand","paddingTop":0,"id":"Button_9F8F6E1B_8CE9_79CA_419B_E6E31F410B18","fontFamily":"Roboto","paddingLeft":0,"shadowSpread":1,"horizontalAlign":"center","paddingBottom":0,"textDecoration":"none","paddingRight":0,"shadowColor":"#000000","iconHeight":0,"rollOverShadow":false,"backgroundColorRatios":[0],"backgroundOpacity":1,"height":50,"verticalAlign":"middle","backgroundColor":["#0F365B"],"pressedBackgroundColorRatios":[0],"layout":"horizontal","pressedBackgroundOpacity":1,"backgroundColorDirection":"vertical","click":"this.openLink(this.translate('LinkBehaviour_99D72F90_8CEB_36D7_41C5_35F6AEBEC86B.source'), '_top')","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","borderColor":"#000000","fontSize":"1.5vh","rollOverFontSize":"1.323042998897464vh","mode":"push","class":"Button","label":trans('Button_9F8F6E1B_8CE9_79CA_419B_E6E31F410B18.label'),"fontStyle":"normal","minHeight":1,"rollOverBackgroundOpacity":1,"propagateClick":false,"shadow":false,"iconBeforeLabel":true,"shadowBlurRadius":15,"minWidth":1,"pressedBackgroundColor":["#BBD149"]},{"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"width":"100%","paddingTop":0,"id":"Image_9E9BA10A_8CE9_CBCA_41D5_6769F568FFBD","paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"url":trans('Image_9E9BA10A_8CE9_CBCA_41D5_6769F568FFBD.url'),"verticalAlign":"middle","backgroundOpacity":0,"height":"87.984%","class":"Image","minHeight":1,"propagateClick":false,"shadow":false,"minWidth":1,"data":{"name":"Image5936"},"scaleMode":"fit_inside"},{"vfov":16.87,"hfovMax":30,"pitch":0,"id":"panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107","hfovMin":"150%","label":trans('panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107.label'),"thumbnailUrl":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_t.jpg","partial":true,"frames":[{"class":"CubicPanoramaFrame","front":{"levels":[{"width":9728,"colCount":19,"url":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_0/f/0/{row}_{column}.jpg","height":9728,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":19},{"width":5120,"colCount":10,"url":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_0/f/1/{row}_{column}.jpg","height":5120,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":10},{"width":2560,"colCount":5,"url":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_0/f/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"colCount":3,"url":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_0/f/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_0/f/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_0/f/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_t.jpg"}],"class":"Panorama","data":{"label":"lobby fix pisan update resize"},"hfov":30},{"displayPlayOverlay":true,"displayPlaybackBar":true,"clickAction":"play_pause","viewerArea":"this.MainViewer","class":"VideoPlayer","id":"MainViewerVideoPlayer"},{"video":"this.VideoResource_89B77752_85D6_E3C8_41D0_14036ED2B4CF","loop":false,"height":720,"width":1280,"id":"video_88C25972_85D6_EFC8_41C4_E3C9EC2E0A71","label":trans('video_88C25972_85D6_EFC8_41C4_E3C9EC2E0A71.label'),"thumbnailUrl":"media/video_88C25972_85D6_EFC8_41C4_E3C9EC2E0A71_t.jpg","class":"Video","data":{"label":"Profesi Keuangan Expo 2022 - Teaser"},"scaleMode":"fit_outside"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"welcome terxt"},"borderRadius":0,"contentOpaque":false,"width":"52.988%","overflow":"scroll","gap":10,"paddingTop":0,"id":"Container_9F9A65A8_8CE8_CAF6_41D1_E9F4AE9E58A0","paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","scrollBarOpacity":0,"top":"15.68%","children":["this.Image_9E9BA10A_8CE9_CBCA_41D5_6769F568FFBD"],"backgroundOpacity":0,"height":"52.04%","verticalAlign":"top","layout":"horizontal","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scrollBarMargin":2,"class":"Container","minHeight":20,"propagateClick":false,"right":"23.57%","minWidth":20,"shadow":false},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Button house info"},"rollOverBackgroundColor":["#009933"],"borderRadius":0,"fontWeight":"bold","gap":5,"width":179.62,"iconWidth":0,"cursor":"hand","paddingTop":0,"id":"Button_77BBCAA0_7974_DA18_41B5_953C26D60536","fontFamily":"Montserrat","paddingLeft":0,"shadowSpread":1,"horizontalAlign":"center","paddingBottom":0,"textDecoration":"none","paddingRight":0,"shadowColor":"#000000","iconHeight":0,"rollOverShadow":false,"backgroundColorRatios":[0],"backgroundOpacity":1,"height":45,"verticalAlign":"middle","backgroundColor":["#000033"],"pressedBackgroundColorRatios":[0],"layout":"horizontal","pressedBackgroundOpacity":1,"backgroundColorDirection":"vertical","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BD03EDE2_A77B_69F8_41E1_E96ADEDC3029, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","borderColor":"#000000","fontSize":"20px","label":trans('Button_77BBCAA0_7974_DA18_41B5_953C26D60536.label'),"mode":"push","class":"Button","fontStyle":"normal","minHeight":1,"rollOverBackgroundOpacity":1,"propagateClick":false,"shadow":false,"iconBeforeLabel":true,"shadowBlurRadius":15,"minWidth":1,"pressedBackgroundColor":["#009933"]},{"duration":1000,"class":"FadeOutEffect","easing":"cubic_in_out","id":"FadeOutEffect_6A9A38B6_7974_2678_41C9_06BD8CE8C88B"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107_camera","media":"this.panorama_9524CD27_8CFB_3BF9_41AB_2C39BE3BD107","start":"this._initItemWithComps(this.mainPlayList, 1, [this.Container_9AEB63CA_8CE9_4E4B_41DA_BC50077D8383], 'begin', true, this.SlideInEffect_95EB71B7_8CF8_CAD9_41C7_CD6D12BE512C, 0, 0); this._initItemWithComps(this.mainPlayList, 1, [this.Container_9AEB63CA_8CE9_4E4B_41DA_BC50077D8383], 'end', false, this.SlideOutEffect_95EB71B7_8CF8_CAD9_41A6_1889365DD448, 0, 0)","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_BD03EDE2_A77B_69F8_41E1_E96ADEDC3029"},{"height":720,"width":1280,"levels":["this.videolevel_BD16ABE1_A77B_69F8_41E0_E3FF04853CA6"],"class":"VideoResource","id":"VideoResource_89B77752_85D6_E3C8_41D0_14036ED2B4CF"},{"framerate":25,"width":1280,"type":"video/mp4","url":trans('videolevel_BD16ABE1_A77B_69F8_41E0_E3FF04853CA6.url'),"posterURL":trans('videolevel_BD16ABE1_A77B_69F8_41E0_E3FF04853CA6.posterURL'),"height":720,"class":"VideoResourceLevel","bitrate":953,"id":"videolevel_BD16ABE1_A77B_69F8_41E0_E3FF04853CA6"}],"paddingLeft":0,"scrollBarWidth":10,"paddingBottom":0,"downloadEnabled":false,"mouseWheelEnabled":true,"paddingRight":0,"horizontalAlign":"left","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"backgroundOpacity":1,"height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#0C2F4A"],"backgroundColorDirection":"vertical","vrPolyfillScale":0.75,"layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scripts":{"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getKey":TDV.Tour.Script.getKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showWindow":TDV.Tour.Script.showWindow,"getMainViewer":TDV.Tour.Script.getMainViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"existsKey":TDV.Tour.Script.existsKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumePlayers":TDV.Tour.Script.resumePlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cloneCamera":TDV.Tour.Script.cloneCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeJS":TDV.Tour.Script.executeJS,"quizStart":TDV.Tour.Script.quizStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPixels":TDV.Tour.Script.getPixels,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"isPanorama":TDV.Tour.Script.isPanorama,"playAudioList":TDV.Tour.Script.playAudioList,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot},"class":"Player","desktopMipmappingEnabled":false,"start":"this.init()","minHeight":0,"propagateClick":false,"shadow":false,"lockedOrientation":"landscape","backgroundPreloadEnabled":true,"mediaActivationMode":"window","minWidth":0,"data":{"defaultLocale":"en","name":"Player2327","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Wed Oct 5 2022