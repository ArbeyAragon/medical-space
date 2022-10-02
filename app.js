// Copyright (c) 2021 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'
import {textFontComponent, troikaTextComponent} from './font-components'
import { initializeApp } from './firebase-app.js'
import { getStorage, getDownloadURL, ref } from "./firebase-storage.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "./firebase-auth.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "./firebase-firestore.js";
import { voiceRecoderStart } from "./constants.js";


AFRAME.registerComponent("change-view", {
  init: function() {

    const firebaseConfig = {
        //Credentials
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const auth = getAuth(app);
    const db = getFirestore(app);


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let uidUser = urlParams.get('uid') ?? '';
    // = 'test';
    console.log(uidUser);

    const userData = {};
    let userList = [];
    let dataLoaded = false;

    const scene = this.el.sceneEl
    this.model = document.getElementById('target')
    this.camera = document.getElementById('camera')
    this.sky = document.getElementById('sky')


    const resetModelToFront = () => {
        this.camera.setAttribute('orbit-controls', {enabled: false})
        // Re-set Model To Center
        scene.emit('recenter')
        const reset = () => {
          scene.emit('recenter', {
            origin: {x: 0, y: 5, z: 5},
            facing: {w: 1, x: 0, y: 0, z: 0},
          })
          this.toggle.classList.remove('disable-button')
          
        }
        scene.addEventListener('realityready', reset)
    };
    

    const getModel = (result) => {
        let promiseModel = () => {};
        /////////////////////////////////////////////////////////////////////////////
        if(result.url_model !== undefined && result.url_model !== ''){
            promiseModel = () => {
              console.log(result.url_model);
              return getDownloadURL(ref(storage, result.url_model))
              .then((realUrl) => {
        
                this.model.removeAttribute("gltf-model");
                this.model.setAttribute('gltf-model', realUrl);

                console.log("Start Load animation");
                this.model.addEventListener("model-loaded", evt => {
                    this.model.object3D.traverse(obj => {obj.frustumCulled = false});
                  
                    const mixer = new THREE.AnimationMixer( this.model.components['gltf-model'].model);

                    userData['animation'] = this.model.components['gltf-model'].model.animations.map((clip)=> clip.name ).filter(cn => cn !== 'idle');
                    const clipName = 'idle';
                    
                    console.log("Animation: ", userData['animation']);
                    console.log("Animation: ", clipName);

                    this.model.removeAttribute("animation-mixer");
                    this.model.setAttribute('animation-mixer', {
                      clip: clipName,
                      loop: true,
                      timeScale: 1, 
                      crossFadeDuration: 1
                    });

                });
              });
            };
        }
        return promiseModel;
    }

    const getImage = (result, code, img) => {
      let promiseImg = () => {};
      //////////////////////////////////////////////////////////////////////////////
      console.log("Image: ", code);
      console.log("Image: ", result[code]);
      if(result[code] !== undefined && result[code] !== ''){
        console.log("Image: 0");
        promiseImg = () => { 
          console.log("Image: 1");
          return getDownloadURL(ref(storage, result[code]))
            .then((realUrl) => {
              console.log("Image: 2");
              console.log("Image: ", realUrl);
              document.getElementById(img).setAttribute('src', realUrl);
              console.log(realUrl);
            });
        };
      }
      return promiseImg;
    };

    

    const getUserData = () => {
        return getDoc(doc(db, "data", "data"))
          .then((result) => {

            userData['img_0'] = result.data()['img_0'] ?? '';
            userData['img_1'] = result.data()['img_1'] ?? '';
            userData['img_2'] = result.data()['img_2'] ?? '';
            userData['img_3'] = result.data()['img_3'] ?? '';
            userData['img_4'] = result.data()['img_4'] ?? '';
            userData['img_5'] = result.data()['img_5'] ?? '';
            userData['img_6'] = result.data()['img_6'] ?? '';
            userData['img_7'] = result.data()['img_7'] ?? '';
            userData['url_model'] = result.data()['url_model'] ?? '';


            dataLoaded = true;
            console.log(userData);
            return userData; 
          })
          .then((result) => {
            var arr = [];

            arr.push(getModel(result));        

            arr.push(getImage(result, "img_0", "plot"));

            /////////////////////////////////////////////////////////////////////////////
            if(arr.length >= 2){
              return Promise.allSettled([arr[0](), arr[1]()]);
            } else if(arr.length === 1){
              return arr[0]();
            }
            return null;
          });
    }


    const sortByKey = (array, key) => {
        return array.sort((a, b) => {
            var x = a[key]; 
            var y = b[key];
            if(x < y){
              return -1;
            } else {
              if(x > y){
                return 1;
              } else {
                return 0
              }
            }
        });
    }

    const updateSearchOptions = (arrOptions) => {
      arrOptions = sortByKey(arrOptions,'name'); 
      let optionsHtml = [];
      for (let i=0; i < arrOptions.length; i++) {
          let selected = localStorage.getItem(arrOptions[i].id) ?? '';
          if(selected === 'true'){
            optionsHtml.push("<option id='" + arrOptions[i].id + "' value='" + arrOptions[i].id + "'> "+arrOptions[i].name+" </option>");
          } else {
            optionsHtml.push("<option id='" + arrOptions[i].id + "' value='" + arrOptions[i].id + "'> "+arrOptions[i].name+" </option>");
          }
      }
      document.getElementById("names").innerHTML = optionsHtml.join('');
    };


    const getSearchData = () => {
      return getDocs(collection(db, "users")).then((querySnapshot)=>{
         userList = querySnapshot.docs.map((d)=>{
             const data = { id: d.id+'' };
             data['age'] = d.data()['age'] ?? '';
             data['animal'] = d.data()['animal'] ?? '';
             data['beverage'] = d.data()['beverage'] ?? '';
             data['excesa'] = d.data()['excesa'] ?? '';
             data['exteacher'] = d.data()['exteacher'] ?? '';
             data['gender'] = d.data()['gender'] ?? '';
             data['hobbie'] = d.data()['hobbie'] ?? '';
             data['lastname'] = d.data()['lastname'] ?? '';
             data['name'] = d.data()['name'] ?? '';
             data['nchildren'] = d.data()['nchildren'] ?? '';
             data['speciality'] = d.data()['speciality'] ?? '';
             data['sport'] = d.data()['sport'] ?? '';
             data['name'] = data['name'] + " " + data['lastname'];
             return data;
         });
         if(userList.length > 0){;
            updateSearchOptions(userList);
         }
      });
    };

    const setAnimation = (clipName) => {
      try {
        this.model.setAttribute('animation-mixer', {
          clip: clipName,
          loop: true,
          timeScale: 1, 
          crossFadeDuration: 1
        });
      }
      catch (e) {
        console.log(e);
      }
    }
    
    
    signInAnonymously(auth)
      .then(() => {
        return Promise.allSettled([getUserData(), getSearchData()]);
      }).then(()=>{
        voiceRecoderStart(setAnimation);
      });/**/


  
     const toggleOpen = (id) => {
        let v = false; 
        const hobbies = document.getElementById(id);
        if (hobbies.classList.contains("open")){
            hobbies.classList.remove("open");
        }
        else{
            hobbies.classList.add("open");
            v = true;
        }
        return v;
     };
  
  
     const closeImage = (id) => {
        const obj = document.getElementById(id);
        if (obj.classList.contains("open"))
            obj.classList.remove("open");
     };
  
  
     const openImage = (id) => {
        const obj = document.getElementById(id);
        if (!obj.classList.contains("open"))
            obj.classList.add("open");
     };



      const home = () => {
     };

    home();



  }
})


AFRAME.registerComponent('chart', {
  dependencies: ['material'],
  init: function () {
    this.el.getObject3D('mesh').material.alphaTest = 0.5;
  }
});