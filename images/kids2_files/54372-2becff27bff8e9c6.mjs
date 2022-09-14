(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[54372],{562559:(e,t,a)=>{a.d(t,{Z:()=>g});var s=a(667294),i=a(867631),r=a.n(i),o=a(112690),l=a(19121),n=a(494349),h=a(773285),d=a(780280),c=a(883119),u=a(969315),p=a(179888),m=a(785893);function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const b=(e,t)=>{if(t){const a="control"===t?"v3.pinimg.com":"v2.pinimg.com";return e.replace("v.pinimg.com",a)}return e},S=(e,t)=>"string"==typeof e?b(e,t):Array.isArray(e)?((e,t)=>e[0].src&&t?[{...e[0],src:b(e[0].src,t)}]:e)(e,t):e;class P extends s.PureComponent{constructor(...e){super(...e),y(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:p.Cy.DEFAULT}),y(this,"errorRetryCount",1),y(this,"firstFragBuffered",!1),y(this,"hasPlaybackStarted",!1),y(this,"hasVideoSessionStarted",!1),y(this,"hasVideoSessionEnded",!1),y(this,"hls",null),y(this,"fragStartupTime",{}),y(this,"lastLevelSwitchKbps",null),y(this,"lastStallTime",null),y(this,"lastPauseTime",null),y(this,"logSessionStartOnNextPlay",!1),y(this,"playerId",""),y(this,"videoSessionId",""),y(this,"videoVisibleTime",null),y(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?b(this.props.src,this.props.quicExpGroup):b(this.props.src[0].src,this.props.quicExpGroup),totalStallDurationMs:0,totalPauseDurationMs:0,videoCreatedTime:null}),y(this,"initializeHls",(()=>{this.destroyHls();const{src:e,hlsConfig:t,quicExpGroup:a}=this.props,s=new(r())(t),i=S(e,a);s.loadSource(i),this.videoPlayerRef&&s.attachMedia(this.videoPlayerRef.video),s.on(r().Events.FRAG_BUFFERED,this.handleHlsFragBuffered),s.on(r().Events.FRAG_CHANGED,this.handleHlsFragChanged),s.on(r().Events.FRAG_LOADING,this.handleHlsFragLoading),s.on(r().Events.FRAG_LOADED,this.handleHlsFragLoaded),s.on(r().Events.MANIFEST_PARSED,(()=>{this.setState({isManifestParsed:!0})})),s.on(r().Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),s.on(r().Events.ERROR,this.handleHlsError),this.hls=s})),y(this,"destroyHls",(()=>{const{hls:e}=this;e&&e.destroy()})),y(this,"addSegment",(e=>{const{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();const a=this.videoPlayerRef&&this.videoPlayerRef.video,s=this.hls&&this.hls.levels||{},i="number"==typeof e.level?s[e.level]:{},r=this.fragStartupTime[e.url];let o=-1;r&&r.startLoadTime&&r.endLoadTime&&(o=r.endLoadTime-r.startLoadTime);const l={indicatedKbps:i.bitrate/p.bR,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/p.bR||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:i.width,sourceHeight:i.height,startupTimeMs:o,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(l)}})),y(this,"initializeSegments",(e=>{const{contextLogData:t={}}=this.props,{is_closeup_video:a=!1}=t,{segments:s}=this.playbackPerformance;if(!s.length)if(this.hls&&this.videoPlayerRef&&this.videoPlayerRef.video&&e){if(!s.length&&"number"==typeof e.level){const t=this.videoPlayerRef&&this.videoPlayerRef.video,a=this.hls.levels,i="number"==typeof e.level?a[e.level]:{},r=this.fragStartupTime[e.url];let o=-1;r&&r.startLoadTime&&r.endLoadTime&&(o=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/p.bR;const l={indicatedKbps:i.bitrate/p.bR,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/p.bR||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:i.width,sourceHeight:i.height,startupTimeMs:o,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:t.clientWidth,viewportHeight:t.clientHeight,watchedDurationMs:0};s.push(l)}}else(0,u.tE)("initializeSegmentsFailed",!0,a)})),y(this,"getCurrentVideoTime",(()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*p.gJ:null)),y(this,"handleCanPlayVideo",(e=>{const{contextLogData:t={},onReady:a,playing:s}=this.props,{is_closeup_video:i=!1}=t,{canPlayVideo:r}=this.state;(0,u.tE)("handleCanPlayVideo",!0,i,{firstCanPlayEvent:!r,playing:s}),this.playbackPerformance.hasFatalError=!1,r||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)})),y(this,"handleEnded",(e=>{const{loop:t,onEnded:a}=this.props,{segments:s}=this.playbackPerformance,i=s&&s[s.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),i&&(i.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(p.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:p.Cy.ENDED}),a&&a(e)})),y(this,"handleHlsError",((e,t)=>{var a;const{contextLogData:s={}}=this.props,{is_closeup_video:i=!1}=s;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){var o,l,n,h;this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;const e={errorName:t.type,errorReason:t.details,errorRetryCount:this.errorRetryCount,errorMessage:(null===(o=t.err)||void 0===o||null===(l=o.message)||void 0===l?void 0:l.slice(0,50))||"unknown",errorResponse:(null===(n=t.response)||void 0===n||null===(h=n.text)||void 0===h?void 0:h.slice(0,50))||"unknown",playbackState:this.state.playbackState};if((0,u.tE)("fatalError",!0,i,e),this.errorRetryCount>0)switch(this.errorRetryCount-=1,t.type){case r().ErrorTypes.NETWORK_ERROR:if(t.details===r().ErrorDetails.MANIFEST_LOAD_ERROR||t.details===r().ErrorDetails.MANIFEST_LOAD_TIMEOUT||t.details===r().ErrorDetails.MANIFEST_LOAD_PARSING_ERROR){var d;const{src:e,quicExpGroup:t}=this.props,a=S(e,t);null===(d=this.hls)||void 0===d||d.loadSource(a)}else{var c;null===(c=this.hls)||void 0===c||c.startLoad()}break;case r().ErrorTypes.MEDIA_ERROR:null===(a=this.hls)||void 0===a||a.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:p.Cy.FAILED})})),y(this,"handleHlsFragBuffered",((e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)})),y(this,"handleHlsFragChanged",((e,t)=>{this.addSegment(t.frag)})),y(this,"handleHlsFragLoading",((e,t)=>{var a;const s=null===(a=t.frag)||void 0===a?void 0:a.url;s&&!this.fragStartupTime[s]&&(this.fragStartupTime[s]={startLoadTime:new Date})})),y(this,"handleHlsFragLoaded",((e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/p.Fm);const s=null===(a=t.frag)||void 0===a?void 0:a.url;s&&this.fragStartupTime[s]&&this.fragStartupTime[s].startLoadTime&&(this.fragStartupTime[s].endLoadTime=new Date)})),y(this,"handleHlsLevelSwitched",(()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/p.bR)})),y(this,"handleLoadedMetadata",(()=>{this.setState({playbackState:p.Cy.LOADED_METADATA})})),y(this,"handleLoadStart",(()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:p.Cy.LOAD_START})})),y(this,"handleLoadedData",(()=>{this.setState({playbackState:p.Cy.LOADED_DATA})})),y(this,"handlePlaying",(()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:p.Cy.PLAYING})})),y(this,"handleUserPause",(e=>{const{onControlsPause:t}=this.props;this.lastPauseTime=new Date,t&&t(e)})),y(this,"handleVideoPause",(()=>{this.state.playbackState!==p.Cy.STALLING&&this.state.playbackState!==p.Cy.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:p.Cy.PAUSED})})),y(this,"handleSeeking",(()=>{this.playbackPerformance.numberOfSeeks+=1;const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==p.Cy.ENDED&&this.setState({playbackState:p.Cy.SEEKING})})),y(this,"handleStalled",(()=>{null===this.lastStallTime&&this.state.playbackState!==p.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1),this.setState({playbackState:p.Cy.STALLING})})),y(this,"handleTimeUpdate",(e=>{const{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===p.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())})),y(this,"resetPlaybackMetrics",(()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;const e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]})),y(this,"setLastSegmentStartPlayTime",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())})),y(this,"setLastSegmentPlaybackStartDate",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())})),y(this,"setPlaybackStartTime",(()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)})),y(this,"setVideoPlayerRef",(e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}})),y(this,"updateStallDuration",(()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)})),y(this,"updatePauseDuration",(()=>{if(null!==this.lastPauseTime){const e=this.lastPauseTime;this.playbackPerformance.totalPauseDurationMs+=new Date-e,this.lastPauseTime=null}})),y(this,"updateWatchDurationForCurrentSegment",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,s=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof s&&"number"==typeof a){const e=s-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}})),y(this,"logPlaybackPerformance",((e,t)=>{const{contextLogData:a={},userId:s,isAutoPlay:i,logContextEvent:r}=this.props,{is_closeup_video:o=!1}=a,{canPlayTime:l,detailedErrors:n,downloadedKiloBytes:h,errorCode:d,errorName:c,errorReason:m,hasFatalError:y,playbackStartTimestamp:b,totalPauseDurationMs:S,totalStallDurationMs:P,segments:g,srcString:f,loadStartTime:v,numberOfStalls:D,numberOfSeeks:E}=this.playbackPerformance,k=this.videoPlayerRef&&this.videoPlayerRef.video,T=e===p.DR,L=T&&!this.hasVideoSessionStarted,R=!T&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&k&&(L||R)){var w;let L=-1;l&&v&&(L=l>v?l-v:0);let R=-1;l&&this.videoVisibleTime&&(R=l>this.videoVisibleTime?l-this.videoVisibleTime:0),T&&(this.videoSessionId=(0,p.Y7)(s),this.playerId=this.playerId||(0,p.EB)());const _={autoplaying:i,averageVideoKbps:-1,detailedErrors:n,downloadedKiloBytes:h,isCellular:!1,errorCode:d,errorName:c,errorReason:m,fatalError:y,nativeVideoDurationMs:k.duration*p.gJ||-1,numberOfStalls:D,numberOfSeeks:E,overallPausedDurationMs:S,overallBufferDurationMs:P,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:b||-1,segments:[],sessionMark:e,screenPixelScale:null!==(w=window)&&void 0!==w&&w.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:k.clientWidth,startupPlayerHeight:k.clientHeight,startupTimeMs:L,startupLatencyMs:R,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:k.videoWidth,startupVariantHeight:k.videoHeight,videoUrl:f};if(!T&&g.length){const e=this.hls.levels,t=g[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const a=g.reduce(((t,a)=>{if(a&&"number"==typeof a.level&&e&&e.length>0){return t+(e[a.level]||{}).bitrate*(a.watchedDurationMs||0)/p.gJ}return t}),0),s=g.reduce(((e,t)=>e+(t.watchedDurationMs||0)),0);let i=null,r=0,o=0;do{r+=g[o].watchedDurationMs,i=i||g[o].level,o+=1}while(o<g.length&&g[o].level===i);_.startupVariantKbps=t.indicatedKbps,_.startupVariantWatchedDurationMs=r,_.startupVariantWidth=t.sourceWidth,_.startupVariantHeight=t.sourceHeight,_.startupPlayerWidth=t.viewportWidth,_.startupPlayerHeight=t.viewportHeight,_.overallWatchedDurationMs=s,s>0?(_.averageVideoKbps=a/(s/p.gJ),_.rebufferRate=this.playbackPerformance.totalStallDurationMs/s):0===s&&(_.averageVideoKbps=-1,_.rebufferRate=-1,_.errorName="invalid_watch_duration"),_.segments=g}else _.errorName="invalid_watch_duration";(0,u.ZP)(_,!0,o,{playbackState:this.state.playbackState,...t});const{clientTrackingParams:C,component:A,durationNs:M,element:V,objectId:O,pairId:F,viewData:I,view:N,viewParameter:H,...x}=a;r({aux_data:{...x,is_closeup_video:o,playback_session_id:this.videoSessionId},clientTrackingParams:C,component:A,duration_ns:M,element:V,event_data:{videoPerformanceData:_},event_type:3606,object_id_str:O,pair_id:F,view_data:I,view_parameter:H,view_type:N}),T?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,u.tE)(T?"sessionStart":"sessionEnd",!0,o,{playbackState:this.state.playbackState,...t})}}))}componentDidMount(){const{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),(0,u.tE)("videoMounted",!0,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(p.DR,{initiator:"mount"}))}componentDidUpdate(e){const{loop:t,playing:a,src:s,visible:i,appInFocus:r}=this.props;var o,l;(typeof(o=e.src)!=typeof(l=s)||(Array.isArray(l)?o.length!==l.length||l.some(((e,t)=>!Array.isArray(o)||e.type!==o[t].type||e.src!==o[t].src)):l!==o))&&this.initializeHls(),e.appInFocus&&!r&&(this.logPlaybackPerformance(p.$f,{initiator:"update",loop:t}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===i&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(p.$f,{initiator:"update",loop:t})),!1===e.visible&&!0===i&&(this.videoVisibleTime=this.videoVisibleTime||new Date,a?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(p.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),a&&r&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(p.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){const{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(p.$f,{initiator:"unmount",loop:e}),this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:s,accessibilityPlayLabel:i,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:l,backgroundColor:n,captions:h,controls:d,loop:u,loopOverride:p,onDurationChange:y,onFullscreenChange:b,onLoadedChange:P,onControlsPlay:g,onPlayheadDown:f,onPlayheadUp:v,onSeek:D,onVolumeChange:E,playbackRate:k,playing:T,playsInline:L,poster:R,preload:w,quicExpGroup:_,src:C,volume:A}=this.props,{canPlayVideo:M,isManifestParsed:V}=this.state,O=S(C,_);return(0,m.jsx)(c.nk,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:s,accessibilityPlayLabel:i,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:l,backgroundColor:n,captions:h,controls:d,loop:void 0===p?u:p,onDurationChange:y,onEnded:this.handleEnded,onFullscreenChange:b,onLoadStart:this.handleLoadStart,onLoadedChange:P,onControlsPause:this.handleUserPause,onControlsPlay:g,onPlaying:this.handlePlaying,onPlayheadDown:f,onPlayheadUp:v,onReady:this.handleCanPlayVideo,onSeek:D,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:E,onWaiting:this.handleStalled,playbackRate:k,onPlay:()=>{},onPlayError:()=>{},playing:V&&M&&T,playsInline:L,poster:R,preload:w,ref:this.setVideoPlayerRef,src:O,volume:A})}}const g=(0,s.memo)((function(e){const{country:t,isAuthenticated:a,isBot:s,isSocialBot:i,unauthId:r,userAgent:c}=(0,d.B)(),p=(0,o.Z)(),y=(0,l.Z)(),{browserName:b,browserVersion:S,isMobile:g}=c,{contextLogData:f={}}=e,{is_closeup_video:v=!1,view:D,viewParameter:E}=f,{checkExperiment:k}=(0,h.F)();let T=null;a&&(T=k("web_video_quic").group.length?k("web_video_quic").group:null);const{appUI:L}=(0,n.I)(),R=k("web_video_fail_to_start_fix").anyEnabled?L.appInFocus:e.appInFocus,w={browserName:b,browserVersion:S,country:t,isAuthenticated:a,isBot:s,is_closeup_video:v,isMobile:g,isSocialBot:i,view:D,viewParameter:E};return(0,u.r$)(w),(0,m.jsx)(P,{...e,userId:y.id||r,appInFocus:R,quicExpGroup:T,logContextEvent:p})}))},969315:(e,t,a)=>{a.d(t,{ZP:()=>c,r$:()=>h,tE:()=>d});var s=a(311560),i=a(172071),r=a(179888);const o=["isCellular","videoUrl","sessionMark"];let l={},n="";const h=e=>{const{browserName:t,browserVersion:a,country:i,isAuthenticated:r,isBot:o,isMobile:h,isSocialBot:d,view:c="unknown",viewParameter:u="unknown"}=e;n=(d?"socialBot":o&&"bot")||"nonbot";const p=(0,s.Z)(i);l={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:r,isMobile:h,region:p,view:c,viewParameter:u}};function d(e,t,a,s={}){const r=a?"closeup":"nonCloseup",o=t?"hls":"nonHls",h={...s,...l},d=`web.video.${o}.${n}.${r}.${e}`;i.Z.increment(d,1,h)}function c(e,t,a,s={}){const h=a?"closeup":"nonCloseup",d=t?"hls":"nonHls",c=e.sessionMark===r.DR?"sessionStart":"sessionEnd",u={...s,...l};if(Object.entries(e).forEach((([t,a])=>{const s=`web.video.${d}.${n}.${h}.${c}.${t}`,r=parseInt(a,10),l="number"==typeof r?r:-1;var p;if(!o.includes(t))if(t.includes("fatalError")&&!0===a){const{errorCode:t,errorName:a,errorReason:r}=e;i.Z.increment(s,1,{errorCode:t,errorName:a,errorReason:r,...u})}else if(t.includes("Width")||t.includes("Height")){const e=(p=l)<0?"negative":0===p?"zero":p<200?"xs":p<400?"s":p<600?"m":p<800?"l":p<1e3?"xl":p<1200?"xxl":"over1200";i.Z.increment(s,1,{dimensionBucket:e,...u})}else if("numberOfStalls"===t){let e=a;l>1e3?e="over1000":l>10?e="over10":l<0&&(e="negative"),i.Z.increment(s,1,{numberOfStalls:e,...u})}else"screenPixelScale"===t?i.Z.increment(s,1,{screenPixelScale:a||-1,...u}):l>=0?(0===l&&i.Z.increment(`${s}.zero`,1,u),i.Z.timing(s,l,1),i.Z.timing(`${s}_with_tags`,l,1,u)):l<0&&i.Z.increment(`${s}.negative`,1,u)})),e.sessionMark!==r.DR){const{rebufferRate:t,screenPixelScale:a,startupLatencyMs:s,startupVariantWidth:r,startupPlayerWidth:o}=e,l=`web.video.${d}.${n}.${h}.${c}`;if("number"==typeof r&&"number"==typeof o&&"number"==typeof a){const e=1.5*r>a*o;i.Z.increment(`${l}.upscaled.${e?"good":"bad"}`,1,u)}"number"==typeof s&&i.Z.increment(`${l}.startupLatency.${s<500?"good":"bad"}`,1,u),"number"==typeof t&&i.Z.increment(`${l}.rebufferRate.${t<.01?"good":"bad"}`,1,u)}}},179888:(e,t,a)=>{a.d(t,{$f:()=>r,Cy:()=>h,DR:()=>i,EB:()=>u,Fm:()=>n,Y7:()=>c,bR:()=>l,gJ:()=>o,lG:()=>d});var s=a(172045);const i=1,r=2,o=1e3,l=1e3,n=1e3,h=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),d=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function c(e){return e+"-"+(0,s.Z)()}function u(){return(0,s.Z)()}},559230:(e,t,a)=>{a.d(t,{HJ:()=>i,VS:()=>s,iM:()=>r});const s=2,i="V_HLSV3_MOBILE",r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/54372-2becff27bff8e9c6.mjs.map