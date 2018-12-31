<template>
  <div>
    <button
      @click="start"
      class='btn'
    >开始录音</button>
    <button
      @click="pause"
      class='btn'
    >暂停</button>
    <button
      @click="resume"
      class='btn'
    >继续</button>
    <button
      @click="stop"
      class='btn'
    >停止</button>

    <button
      @click="play"
      class='btn'
    >播放</button>
    <button
      @click="upload"
      class='btn'
    >上传</button>
  </div>
</template>

<script>
import upload from "@/utils/upload";

export default {
  props: ["data"],
  data: function() {
    return {
      recorderManager: wx.getRecorderManager(),
      innerAudioContext: wx.createInnerAudioContext(),
      tempFilePath: ""
    };
  },
  methods: {
    start: function() {
      const options = {
        duration: 10000, //指定录音的时长，单位 ms
        sampleRate: 16000, //采样率
        numberOfChannels: 1, //录音通道数
        encodeBitRate: 96000, //编码码率
        format: "mp3", //音频格式，有效值 aac/mp3
        frameSize: 50 //指定帧大小，单位 KB
      };
      //开始录音
      this.recorderManager.start(options);
      this.recorderManager.onStart(() => {
        console.log("recorder start");
      });
      //错误回调
      this.recorderManager.onError(res => {
        console.log(res);
      });
    }, //end start
    pause: function() {
      this.recorderManager.pause();
      this.recorderManager.onPause(res => {
        console.log("暂停录音");
      });
    }, //end pause
    resume: function() {
      this.recorderManager.resume();
      this.recorderManager.onStart(() => {
        console.log("重新开始录音");
      });
      //错误回调
      this.recorderManager.onError(res => {
        console.log(res);
      });
    }, //end resume
    stop: function() {
      //停止录音
      this.recorderManager.stop();
      this.recorderManager.onStop(res => {
        this.tempFilePath = res.tempFilePath;
        console.log("停止录音", res.tempFilePath);
        const { tempFilePath } = res;
      });
    }, //end stop

    play: function() {
      if (this.tempFilePath) {
        //播放声音
        this.innerAudioContext.autoplay = true;
        (this.innerAudioContext.src = this.tempFilePath),
          this.innerAudioContext.onPlay(() => {
            console.log("开始播放");
          });
        this.innerAudioContext.onError(res => {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
      }
    },
    upload: function() {
      if (this.tempFilePath)
        upload.uploadRecord(this.tempFilePath).then(res => {
          console.log(res);
          wx.showToast({
            title: res
          });
        });
    }
  }
};
</script>

<style>
.btn {
  margin-top: 10rpx;
}
div {
}
</style>
