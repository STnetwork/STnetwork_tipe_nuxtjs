<template>
  <div v-html="content"></div>
</template>
<script>
import Marked from 'marked'
import HighlightJs from 'highlight.js'
export default {
  computed: {
    content () {
      Marked.setOptions({
        gfm: true,
        highlight: function (code) {
          return HighlightJs.highlightAuto(code).value
        }
      })
      return Marked(this.markdown || '')
    }
  },
  props: {
    markdown: String
  },
  head () {
    return {
      link: [
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css'},
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css'}
      ]
    }
  }
}
</script>


<style lang="sass">

// Use this file to override default bulma variables

// Custom

.columns
  padding-top: 5px

$grey-darker:   #1d1f21;
$grey-light:   #FCFCFC;
$grey-lighter: #dee5ed;
$solarized-dark: #002b36;
$family-sans-serif: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;


$body-background-color: $grey-light;
//$pre-background: $solarized-dark;
//$text: $grey-lighter;
//$text-strong: darken($grey-lighter, 10);
//$text-light: $grey-light;


// Use this file to override default bulma variables
@import "~bulmaswatch/cosmo/_variables.scss";
@import "~bulma/bulma.sass";
@import "~bulmaswatch/cosmo/_overrides.scss";
@import "~buefy/src/scss/buefy";


// Material Icons & Font Awasome
@import url( '//fonts.googleapis.com/icon?family=Material+Icons' );

// Bulma pre element fix when wrapped in content
.content
  pre
    // +tablet
    @media screen and (min-width: 769px), print
      white-space: pre-wrap

// Center image Markdown Grav

.center
  display: block
  margin: 0 auto

// Arow from Metro UI

.nav-button
  width: 2.5rem
  height: 2.5rem
  background-size: 1rem 1rem
  background: center center no-repeat
  text-indent: -9999px
  border: 0
  display: inline-block
  cursor: pointer
  z-index: 2
  position: relative
  float: left
  span
    position: absolute
    top: 1.2rem
    left: .5rem
    width: 1.2rem
    height: 2px
    margin: 0 0 0
    background: #1d1d1d
    -webkit-transform: rotate(0)
    transform: rotate(0)
    transition: all 0.3s linear
    &:before
      content: ''
      position: absolute
      top: -0.5rem
      right: 0
      width: 1.2rem
      height: 2px
      background: #1d1d1d
      -webkit-transform: rotate(0)
      transform: rotate(0)
      transition: all 0.3s linear
    &:after
      content: ''
      position: absolute
      top: -0.5rem
      right: 0
      width: 1.2rem
      height: 2px
      background: #1d1d1d
      -webkit-transform: rotate(0)
      transform: rotate(0)
      transition: all 0.3s linear
      top: .5rem
  &.transform span
    -webkit-transform: rotate(180deg)
    transform: rotate(180deg)
    background: #1d1d1d
    &:before
      content: ''
      top: -5px
      right: 0
      width: .75rem
      -webkit-transform: rotate(45deg)
      transform: rotate(45deg)
    &:after
      content: ''
      top: -5px
      right: 0
      width: .75rem
      -webkit-transform: rotate(45deg)
      transform: rotate(45deg)
      top: 5px
      -webkit-transform: rotate(-45deg)
      transform: rotate(-45deg)



.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.title
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  /* 1
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>



