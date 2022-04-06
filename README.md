# Nuxt VK Pixel plugin

## Install

```bash
$ npm install --save nuxt-vk-pixel
// or
$ yarn add nuxt-vk-pixel
```

## Getting Started

Add `nuxt-vk-pixel` to `modules` section of `nuxt.config.js`.

```js
{
  modules: [
    ['nuxt-vk-pixel', {
      /* module options */
      id: 'VK_PIXEL_ID',
      debug: false,
    }],
 ]
}
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| id  | null     | true     | The unique pixel identifier provided by VK.                                         |
| debug    | false | false    | By default, tracking in development mode is disabled. By specifying `true`, you manually allow tracking in development mode.                                                               |