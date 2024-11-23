<template>
    <ion-page>
       <ion-header>
          <ion-toolbar>
           <ion-title>Activity 1</ion-title>
          </ion-toolbar>
       </ion-header>
       <ion-content class="ion-no-padding">
         <ion-list>
            <ion-item lines="full">
                <ion-icon slot="start" :icon="logoIonic"></ion-icon>
                <ion-label>
                    <h3><strong>Activity 1: IonList, IonItem, IonIcon, IonLabel</strong></h3>
                    <p><small>Learn to use IonList, IonItem, IonLabel, components </small></p>
                </ion-label>
            </ion-item>
            <ion-item lines="full" @click="()=>{$router.push('/activity2')}">
                <ion-icon slot="start" :icon="logoIonic"></ion-icon>
                <ion-label>
                    <h3><strong>Activity 2: IonCard, IonCardContent</strong></h3>
                    <p><small>Learn to use  IonCard, IonCardContent components </small></p>
                </ion-label>
            </ion-item>
            <ion-item lines="full" @click="()=>{$router.push('/activity3')}">
                <ion-icon slot="start" :icon="logoIonic"></ion-icon>
                <ion-label>
                    <h3><strong>Activity 3: Modal Implementation</strong></h3>
                    <p><small>Learn to use Modal components </small></p>
                </ion-label>
            </ion-item>
         </ion-list> 
        </ion-content>  
       </ion-page>
   </template>
   <script lang="ts">
   
      import { defineComponent } from 'vue';
      import { IonList, IonItem, IonIcon, IonLabel, IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';
      import { logoIonic } from 'ionicons/icons'; 

      export default defineComponent({
         name: "IndexScreen",
         components: { IonList, IonItem, IonIcon, IonLabel, IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter },
         setup () {
            return {
              logoIonic
            }
         }
      });
   
   </script>