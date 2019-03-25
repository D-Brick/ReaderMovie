var postsData = require('../../data/posts-data.js')
// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      post_key: postsData.postList
    })
  },
  onPostTap: function (e) {
    var postId = e.currentTarget.dataset.postId
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  }
})