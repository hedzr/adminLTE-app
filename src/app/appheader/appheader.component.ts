import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var navbar_dark_skins = [
      'navbar-primary',
      'navbar-secondary',
      'navbar-info',
      'navbar-success',
      'navbar-danger',
      'navbar-indigo',
      'navbar-purple',
      'navbar-pink',
      'navbar-navy',
      'navbar-lightblue',
      'navbar-teal',
      'navbar-cyan',
      'navbar-dark',
      'navbar-gray-dark',
      'navbar-gray'
    ]

    var navbar_light_skins = [
      'navbar-light',
      'navbar-warning',
      'navbar-white',
      'navbar-orange'
    ]

    var sidebar_colors = [
      'bg-primary',
      'bg-warning',
      'bg-info',
      'bg-danger',
      'bg-success',
      'bg-indigo',
      'bg-lightblue',
      'bg-navy',
      'bg-purple',
      'bg-fuchsia',
      'bg-pink',
      'bg-maroon',
      'bg-orange',
      'bg-lime',
      'bg-teal',
      'bg-olive'
    ]

    var accent_colors = [
      'accent-primary',
      'accent-warning',
      'accent-info',
      'accent-danger',
      'accent-success',
      'accent-indigo',
      'accent-lightblue',
      'accent-navy',
      'accent-purple',
      'accent-fuchsia',
      'accent-pink',
      'accent-maroon',
      'accent-orange',
      'accent-lime',
      'accent-teal',
      'accent-olive'
    ]

    var sidebar_skins = [
      'sidebar-dark-primary',
      'sidebar-dark-warning',
      'sidebar-dark-info',
      'sidebar-dark-danger',
      'sidebar-dark-success',
      'sidebar-dark-indigo',
      'sidebar-dark-lightblue',
      'sidebar-dark-navy',
      'sidebar-dark-purple',
      'sidebar-dark-fuchsia',
      'sidebar-dark-pink',
      'sidebar-dark-maroon',
      'sidebar-dark-orange',
      'sidebar-dark-lime',
      'sidebar-dark-teal',
      'sidebar-dark-olive',
      'sidebar-light-primary',
      'sidebar-light-warning',
      'sidebar-light-info',
      'sidebar-light-danger',
      'sidebar-light-success',
      'sidebar-light-indigo',
      'sidebar-light-lightblue',
      'sidebar-light-navy',
      'sidebar-light-purple',
      'sidebar-light-fuchsia',
      'sidebar-light-pink',
      'sidebar-light-maroon',
      'sidebar-light-orange',
      'sidebar-light-lime',
      'sidebar-light-teal',
      'sidebar-light-olive'
    ]

    var $sidebar = $('.control-sidebar')
    var $container = $('<div />', {
      class: 'p-3 control-sidebar-content'
    })

    $container.append('<h6>Navbar Variants</h6>')

    var $navbar_variants = $('<div />', {
      class: 'd-flex'
    })
    var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins)
    var $navbar_variants_colors = this.createSkinBlock(navbar_all_colors, function () {
      var color = $(this).data('color')
      var $main_header = $('.main-header')
      $main_header.removeClass('navbar-dark').removeClass('navbar-light')
      navbar_all_colors.forEach(function (color) {
        $main_header.removeClass(color)
      })

      $(this).parent().removeClass().addClass('custom-select mb-3 text-light border-0 ')

      if (navbar_dark_skins.indexOf(color) > -1) {
        $main_header.addClass('navbar-dark')
        $(this).parent().addClass(color).addClass('text-light')
      } else {
        $main_header.addClass('navbar-light')
        $(this).parent().addClass(color)
      }

      $main_header.addClass(color)
    }, false)

    var active_navbar_color = null
    $('.main-header')[0].classList.forEach(function (className) {
      if (navbar_all_colors.indexOf(className) > -1 && active_navbar_color === null) {
        active_navbar_color = className.replace('navbar-', 'bg-')
      }
    })

    $navbar_variants_colors.find('option.' + active_navbar_color).prop('selected', true)
    $navbar_variants_colors.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_navbar_color)

    $navbar_variants.append($navbar_variants_colors)

    $container.append($navbar_variants)

    // Sidebar Colors

    $container.append('<h6>Accent Color Variants</h6>')
    var $accent_variants = $('<div />', {
      class: 'd-flex'
    })
    $container.append($accent_variants)
    $container.append(this.createSkinBlock(accent_colors, function () {
      var color = $(this).data('color')
      var accent_class = color
      var $body = $('body')
      accent_colors.forEach(function (skin) {
        $body.removeClass(skin)
      })

      $body.addClass(accent_class)
    }, true))

    var active_accent_color = null
    $('body')[0].classList.forEach(function (className) {
      if (accent_colors.indexOf(className) > -1 && active_accent_color === null) {
        active_accent_color = className.replace('navbar-', 'bg-')
      }
    })

    // $accent_variants.find('option.' + active_accent_color).prop('selected', true)
    // $accent_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_accent_color)

    $container.append('<h6>Dark Sidebar Variants</h6>')
    var $sidebar_variants_dark = $('<div />', {
      class: 'd-flex'
    })
    $container.append($sidebar_variants_dark)
    var $sidebar_dark_variants = this.createSkinBlock(sidebar_colors, function () {
      var color = $(this).data('color')
      var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
      var $sidebar = $('.main-sidebar')
      sidebar_skins.forEach(function (skin) {
        $sidebar.removeClass(skin)
        $sidebar_light_variants.removeClass(skin.replace('sidebar-dark-', 'bg-')).removeClass('text-light')
      })

      $(this).parent().removeClass().addClass('custom-select mb-3 text-light border-0').addClass(color)

      $sidebar_light_variants.find('option').prop('selected', false)
      $sidebar.addClass(sidebar_class)
      $('.sidebar').removeClass('os-theme-dark').addClass('os-theme-light')
    }, true)
    $container.append($sidebar_dark_variants)

    var active_sidebar_dark_color = null
    $('.main-sidebar')[0].classList.forEach(function (className) {
      var color = className.replace('sidebar-dark-', 'bg-')
      if (sidebar_colors.indexOf(color) > -1 && active_sidebar_dark_color === null) {
        active_sidebar_dark_color = color
      }
    })

    $sidebar_dark_variants.find('option.' + active_sidebar_dark_color).prop('selected', true)
    $sidebar_dark_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_sidebar_dark_color)

    $container.append('<h6>Light Sidebar Variants</h6>')
    var $sidebar_variants_light = $('<div />', {
      class: 'd-flex'
    })
    $container.append($sidebar_variants_light)
    var $sidebar_light_variants = this.createSkinBlock(sidebar_colors, function () {
      var color = $(this).data('color')
      var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
      var $sidebar = $('.main-sidebar')
      sidebar_skins.forEach(function (skin) {
        $sidebar.removeClass(skin)
        $sidebar_dark_variants.removeClass(skin.replace('sidebar-light-', 'bg-')).removeClass('text-light')
      })

      $(this).parent().removeClass().addClass('custom-select mb-3 text-light border-0').addClass(color)

      $sidebar_dark_variants.find('option').prop('selected', false)
      $sidebar.addClass(sidebar_class)
      $('.sidebar').removeClass('os-theme-light').addClass('os-theme-dark')
    }, true)
    $container.append($sidebar_light_variants)

    var active_sidebar_light_color = null
    $('.main-sidebar')[0].classList.forEach(function (className) {
      var color = className.replace('sidebar-light-', 'bg-')
      if (sidebar_colors.indexOf(color) > -1 && active_sidebar_light_color === null) {
        active_sidebar_light_color = color
      }
    })

    if (active_sidebar_light_color !== null) {
      $sidebar_light_variants.find('option.' + active_sidebar_light_color).prop('selected', true)
      $sidebar_light_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_sidebar_light_color)
    }

    var logo_skins = navbar_all_colors
    $container.append('<h6>Brand Logo Variants</h6>')
    var $logo_variants = $('<div />', {
      class: 'd-flex'
    })
    $container.append($logo_variants)
    var $clear_btn = $('<a />', {
      href: '#'
    }).text('clear').on('click', function (e) {
      e.preventDefault()
      var $logo = $('.brand-link')
      logo_skins.forEach(function (skin) {
        $logo.removeClass(skin)
      })
    })

    var $brand_variants = this.createSkinBlock(logo_skins, function () {
      var color = $(this).data('color')
      var $logo = $('.brand-link')

      if (color === 'navbar-light' || color === 'navbar-white') {
        $logo.addClass('text-black')
      } else {
        $logo.removeClass('text-black')
      }

      logo_skins.forEach(function (skin) {
        $logo.removeClass(skin)
      })

      if (color) {
        $(this).parent().removeClass().addClass('custom-select mb-3 border-0').addClass(color).addClass(color !== 'navbar-light' && color !== 'navbar-white' ? 'text-light' : '')
      } else {
        $(this).parent().removeClass().addClass('custom-select mb-3 border-0')
      }

      $logo.addClass(color)
    }, true).append($clear_btn)
    $container.append($brand_variants)

    var active_brand_color = null
    $('.brand-link')[0].classList.forEach(function (className) {
      if (logo_skins.indexOf(className) > -1 && active_brand_color === null) {
        active_brand_color = className.replace('navbar-', 'bg-')
      }
    })

    if (active_brand_color) {
      $brand_variants.find('option.' + active_brand_color).prop('selected', true)
      $brand_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_brand_color)
    }
  }

  createSkinBlock(colors: any[], callback: () => void, noneSelected: boolean): any {
    var $block = $('<select />', {
      class: noneSelected ? 'custom-select mb-3 border-0' : 'custom-select mb-3 text-light border-0 ' + colors[0].replace(/accent-|navbar-/, 'bg-')
    })

    if (noneSelected) {
      var $default = $('<option />', {
        text: 'None Selected'
      })
      if (callback) {
        $default.on('click', callback)
      }

      $block.append($default)
    }

    var pt = this;
    colors.forEach(function (color) {
      var $color = $('<option />', {
        class: (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-'),
        text: pt.capitalizeFirstLetter((typeof color === 'object' ? color.join(' ') : color).replace(/navbar-|accent-|bg-/, '').replace('-', ' '))
      })

      $block.append($color)

      $color.data('color', color)

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }

  capitalizeFirstLetter(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

}
