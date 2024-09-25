<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="" />

      <!-- Form 1 -->
      <ion-card class="card-spacing">
        <img
          alt="Silhouette of mountains"
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
          style="height: 350px; width: 590px"
        />
        <ion-card-header>
          <ion-card-subtitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing.
          </ion-card-subtitle>
          <ion-card-title>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </ion-card-content>
        <ion-button fill="clear">Selengkapnya</ion-button>
      </ion-card>

      <!-- Form 2 -->
      <ion-card class="card-spacing-2">
        <ion-card-header>
          <ion-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing.</ion-card-subtitle>
          <ion-card-title>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </ion-card-content>
        <ion-button fill="clear">Selengkapnya</ion-button>
      </ion-card>

       <!-- Form 3 -->
       <ion-card class="card-spacing-3">
        <ion-card-header>
          <ion-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing.</ion-card-subtitle>
          <ion-card-title>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </ion-card-content>
        <ion-button fill="clear">Selengkapnya</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
</script>

<style scoped>
.card-spacing {
  margin-bottom: 20px; /* Jarak bawah form 1 */
}

.card-spacing-2 {
  margin-top: 20px; /* Jarak atas form 2 */
}
</style>
