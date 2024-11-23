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
    <img src="https://www.motodeal.com.ph/custom/blog-post/header/here-are-10-lightweight-big-bikes-worth-considering-in-2023-63c40bb76467d.jpeg" />
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