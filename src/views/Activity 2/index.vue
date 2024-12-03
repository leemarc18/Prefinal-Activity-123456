<template>
  <ion-page>
     <ion-header>
        <ion-toolbar>
         <ion-title>Activity 2</ion-title>
        </ion-toolbar>
     </ion-header>
     <ion-content class="ion-padding">
       <ion-card>
      <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
     </ion-card-header>

    <ion-card-content>
     Here's a small text description for the card content. Nothing more, nothing less.
   </ion-card-content>
</ion-card>
<ion-card>
    <img src="https://www.saatva.com/blog/wp-content/uploads/2021/03/f179b237-37cf-4132-abf4-8497f46b7e19_sleeping-in-space-main-4.jpeg" />
    <ion-card-content>
     Here's a small text description for the card content. Nothing more, nothing less.
   </ion-card-content>
</ion-card>
       </ion-content>
      <ion-footer>
             
         </ion-footer>
     </ion-page>
 </template>
 <script lang="ts">
 
    import { defineComponent } from 'vue';
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';
     
    export default defineComponent({
       name: "IndexScreen",
       components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter }
    });
 
 </script>