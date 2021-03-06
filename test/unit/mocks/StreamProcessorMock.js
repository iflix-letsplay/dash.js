import PlaybackControllerMock from './PlaybackControllerMock';

class FragmentModelMock {
    constructor() {
        this.requests = [];
    }

    getRequests() {
        return this.requests;
    }

    isFragmentLoaded() {
        return false;
    }
}

class BufferControllerMock {
    constructor() {
        this.seekStartTime = 0;
    }

    setSeekStartTime(time) {
        this.seekStartTime = time;
    }

    isBufferingCompleted() {
        return false;
    }

    getRangeAt() {
        return null;
    }

    getBuffer() {
        return {
            getAllBufferRanges: () => {}
        };
    }
}

class RepresentationControllerMock {
    constructor() {}

    getCurrentRepresentation() {
        return {adaptation: {period: {mpd: {manifest: {type: 'dynamic', Period_asArray: [{AdaptationSet_asArray: [{SegmentTemplate: {timescale: 10000000}}]}]}}, index: 0}, index: 0}};
    }
}

class StreamProcessorMock {
    constructor(testType, streamInfo) {
        this.type = testType;
        this.streamInfo = streamInfo;
        this.representationController = new RepresentationControllerMock();
        this.fragmentModel = new FragmentModelMock();
        this.bufferController = new BufferControllerMock();
    }

    getBufferController() {
        return this.bufferController;
    }

    getType() {
        return this.type;
    }

    getCurrentTrack() {}

    getMediaInfo() {
        return {
            bitrateList: [],
            mimeType: 'video/mp4'
        };
    }

    getIndexHandler() {
        return {
            updateRepresentation: () => {}
        };
    }

    getScheduleController() {
        return {
            getBufferTarget() {
                return 20;
            },
            getSeekTarget() {
                return 1;
            },
            setSeekTarget() {
            },
            getTimeToLoadDelay() {
                return 0;
            },
            setTimeToLoadDelay() {
            }
        };
    }

    getRepresentationController() {
        return this.representationController;
    }

    getFragmentModel() {
        return this.fragmentModel;
    }

    isDynamic() {
        return true;
    }

    getRepresentationInfoForQuality(quality) {
        let offest = quality ? 2 : 1;
        return {
            MSETimeOffset: offest
        };
    }

    getStreamInfo() {
        return this.streamInfo;
    }

    getCurrentRepresentationInfo() {
        return {mediaInfo: {type: this.type}};
    }

    isBufferingCompleted() {
        return this.bufferController.isBufferingCompleted();
    }

    getFragmentController() {
        return null;
    }

    getPlaybackController() {
        return new PlaybackControllerMock();
    }

    switchInitData() {}

    reset() {}
}

export default StreamProcessorMock;
