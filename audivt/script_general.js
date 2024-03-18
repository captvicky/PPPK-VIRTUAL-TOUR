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
var script = {"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"defaultLocale":"en","name":"Player3433","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1}},"borderRadius":0,"contentOpaque":false,"width":"100%","overflow":"hidden","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"scrollBarWidth":10,"paddingTop":0,"id":"rootPlayer","definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_6F0627DB_6074_893F_41D5_0243AC86A037_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_6F0627DB_6074_893F_41D5_0243AC86A037_camera","media":"this.panorama_6F0627DB_6074_893F_41D5_0243AC86A037","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Main Viewer"},"progressLeft":0,"toolTipFontFamily":"Arial","width":"100%","translationTransitionDuration":1000,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowOpacity":1,"subtitlesShadow":false,"subtitlesPaddingTop":5,"id":"MainViewer","paddingLeft":0,"subtitlesEnabled":true,"subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingRight":0,"playbackBarHeadShadowBlurRadius":3,"toolTipFontWeight":"normal","toolTipShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","toolTipBorderColor":"#767676","toolTipShadowColor":"#333138","toolTipShadowSpread":0,"transitionDuration":500,"subtitlesGap":0,"progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"height":"100%","toolTipPaddingTop":4,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"toolTipBorderSize":1,"playbackBarHeadBorderSize":0,"playbackBarBorderColor":"#FFFFFF","progressBottom":0,"firstTransitionDuration":0,"playbackBarBorderRadius":0,"playbackBarLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressHeight":10,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"class":"ViewerArea","subtitlesFontSize":"3vmin","minHeight":50,"playbackBarHeadOpacity":1,"progressBorderSize":0,"playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingBottom":4,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"playbackBarBottom":5,"toolTipFontColor":"#606060","borderRadius":0,"progressRight":0,"minWidth":100,"playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"progressOpacity":1,"subtitlesBorderSize":0,"toolTipBorderRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","paddingTop":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","paddingBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"playbackBarHeadShadowVerticalLength":0,"vrPointerColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","subtitlesTextShadowOpacity":1,"toolTipTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","subtitlesFontWeight":"normal","subtitlesTextShadowVerticalLength":1,"toolTipShadowHorizontalLength":0,"subtitlesTextDecoration":"none","subtitlesPaddingLeft":5,"surfaceReticleSelectionColor":"#FFFFFF","surfaceReticleOpacity":0.6,"subtitlesTextShadowBlurRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"toolTipOpacity":1,"toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","transitionMode":"blending","playbackBarRight":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"toolTipPaddingRight":6,"shadow":false,"subtitlesPaddingRight":5,"displayTooltipInTouchScreens":true,"subtitlesFontFamily":"Arial"},{"overlays":["this.overlay_6F2B5DF6_607B_F909_41D7_03A8A4AC9606"],"hfovMax":30,"pitch":0,"thumbnailUrl":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_t.jpg","hfovMin":"150%","label":trans('panorama_6F0627DB_6074_893F_41D5_0243AC86A037.label'),"id":"panorama_6F0627DB_6074_893F_41D5_0243AC86A037","partial":true,"frames":[{"class":"CubicPanoramaFrame","front":{"levels":[{"width":7680,"colCount":15,"url":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_0/f/0/{row}_{column}.jpg","height":7680,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":15},{"width":4096,"colCount":8,"url":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_0/f/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":8},{"width":2048,"colCount":4,"url":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_0/f/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"width":1024,"colCount":2,"url":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_0/f/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_0/f/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_0/f/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_6F0627DB_6074_893F_41D5_0243AC86A037_t.jpg"}],"class":"Panorama","data":{"label":"auditorium_Moment"},"hfov":30,"vfov":16.88},{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true,"zoomEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_6F9C5123_607F_890F_41D1_AD86BA2F993F","distance":100,"yaw":-0.51,"pitch":2.86,"vfov":0.99,"class":"HotspotPanoramaOverlayImage","data":{"label":"Info Red 03"},"verticalAlign":"middle","horizontalAlign":"center","hfov":1.11,"scaleMode":"fit_inside"}],"useHandCursor":true,"data":{"label":"Info Red 03"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6F1AFDFA_607B_F8F9_419A_9071AAB5A259"],"id":"overlay_6F2B5DF6_607B_F909_41D7_03A8A4AC9606"},{"colCount":4,"frameCount":24,"levels":[{"height":540,"width":360,"class":"ImageResourceLevel","url":"media/res_71568849_607F_8718_41CE_A2A6BB8706E2_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_6F9C5123_607F_890F_41D1_AD86BA2F993F"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_70C4E5D4_607C_8909_41C7_96EEF990EEDF.source'), '_top')","id":"HotspotPanoramaOverlayArea_6F1AFDFA_607B_F8F9_419A_9071AAB5A259"}],"paddingLeft":0,"paddingBottom":0,"downloadEnabled":false,"mouseWheelEnabled":true,"paddingRight":0,"horizontalAlign":"left","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"defaultVRPointer":"laser","backgroundOpacity":1,"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","vrPolyfillScale":0.75,"layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","children":["this.MainViewer"],"scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeJS":TDV.Tour.Script.executeJS,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"initQuiz":TDV.Tour.Script.initQuiz,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openLink":TDV.Tour.Script.openLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getKey":TDV.Tour.Script.getKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"shareSocial":TDV.Tour.Script.shareSocial,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMapLocation":TDV.Tour.Script.setMapLocation,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cloneCamera":TDV.Tour.Script.cloneCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"mixObject":TDV.Tour.Script.mixObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setValue":TDV.Tour.Script.setValue,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizStart":TDV.Tour.Script.quizStart,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playAudioList":TDV.Tour.Script.playAudioList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizFinish":TDV.Tour.Script.quizFinish,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"translate":TDV.Tour.Script.translate,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"existsKey":TDV.Tour.Script.existsKey},"class":"Player","desktopMipmappingEnabled":false,"start":"this.init()","minHeight":0,"propagateClick":false,"shadow":false,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Wed Sep 21 2022