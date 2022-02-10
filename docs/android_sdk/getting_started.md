---
sidebar_position: 1
slug: /android_sdk
---

# Getting Started

:::danger Pre - requisite

You need to have a **TeachStack url** generated using the **/add/user API**. For more reference, please refer to this [link](https://docs.teachmint.com/)

:::

## Project level

**In Project level build.gradle file**

- In the **repositories section** under the **“buildscript”** configuration section, add

```js
  maven {
  url = "https://plugins.gradle.org/m2/"
  }
```

- In the **dependencies section**, add

```js
 classpath "gradle.plugin.com.google.cloud.artifactregistry:artifactregistry-gradle-plugin:2.1.4"
```

- In the **repositories section** of the **“allprojects”** configuration section, add

```js
  maven {
  url "https://asia-south1-maven.pkg.dev/excellent-math-274709/android-sdk-vc"
  }
```

## Module level

**In Module level build.gradle file**

- Add the below line to integrate the TeachStack SDK

```js
  implementation group: 'com.teachmint', name: 'android-sdk', version: '0.2.4'
```

:::note

- Use Java Version 11

- Please ensure that you have included all these dependencies in your module level build.gradle file for the seamless integration of the TeachStack SDK

- Also, in case the dependency is already defined in your project, please ensure that it is on the same version as defined in here

  ```js
  implementation 'androidx.core:core-ktx:1.7.0'
  implementation 'androidx.appcompat:appcompat:1.4.0'
  implementation 'com.google.android.material:material:1.4.0'
  implementation 'androidx.constraintlayout:constraintlayout:2.1.2'

  implementation 'androidx.navigation:navigation-fragment-ktx:2.3.5'
  implementation 'androidx.navigation:navigation-ui-ktx:2.3.5'
  implementation "androidx.navigation:navigation-runtime-ktx:2.3.5"
  implementation 'androidx.legacy:legacy-support-v4:1.0.0'
  implementation 'com.google.code.gson:gson:2.8.6'

  implementation 'com.squareup.okhttp3:okhttp:4.9.0'
  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.5.0'
  implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.4.0'

  implementation fileTree(dir: 'libs', include: ['*.jar', "*.aar"])

  implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.5.21"
  implementation "org.jetbrains.kotlin:kotlin-reflect:1.5.21"
  implementation "com.google.accompanist:accompanist-appcompat-theme:0.15.0"

  implementation 'org.webrtc:google-webrtc:1.0.32006'
  implementation 'com.squareup.retrofit2:retrofit:2.7.2'
  implementation 'com.squareup.retrofit2:converter-moshi:2.7.2'

  implementation 'com.squareup.moshi:moshi:1.12.0'
  kapt 'com.squareup.moshi:moshi-kotlin-codegen:1.12.0'
  implementation 'com.squareup.moshi:moshi-kotlin:1.12.0'

  implementation 'com.github.bumptech.glide:glide:4.12.0'

  implementation 'com.google.android:flexbox:2.0.1'

  implementation 'com.github.ivbaranov:materiallettericon:0.2.3'
  implementation 'androidx.work:work-runtime-ktx:2.7.0'
  ```

:::
