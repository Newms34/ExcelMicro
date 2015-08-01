var app = angular.module("excel", []);

app.controller("MainController", function($scope, $window, fac1, $http) {
    $scope.numTweets = Math.floor(Math.random()*150);
    $scope.following = Math.floor(Math.random()*150);
    $scope.followers = Math.floor(Math.random()*150);
    $scope.trendTweets = [{
        title:'Dusty Rhodes',
        text:'Remembering Dusty Rhodes',
        num:'166k'
    },
    {
        title:'Dusty Rhodes2',
        text:'Thinking about Dusty Rhodes',
        num:'12k'
    },
    {
        title:'Dusty Rhodes3',
        text:'Pondering Dusty Rhodes',
        num:'21k'
    },
    {
        title:'Dusty Rhodes4',
        text:'Cogitating Dusty Rhodes',
        num:'42k'
    },
    {
        title:'Dusty Rhodes5',
        text:'Pontificating Dusty Rhodes',
        num:'1k'
    },
    {
        title:'Dusty Rhodes6',
        text:'Using your brain on Dusty Rhodes',
        num:'50k'
    }];


    $scope.mainTweets = [{
        title:'Blahblah',
        text:'Normally there would be some text here',
        time:'16m',
        pic:'/people'
    },
    {
        title:'Blahblah',
        text:'Normally there would be some text here',
        time:'16m',
        pic:'/animals'
    },
    {
        title:'Blahblah',
        text:'Normally there would be some text here',
        time:'16m',
        pic:'/abstract'
    },
    {
        title:'Blahblah',
        text:'Normally there would be some text here',
        time:'16m',
        pic:'/nature'
    }];
});