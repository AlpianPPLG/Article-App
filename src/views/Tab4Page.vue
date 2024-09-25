<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profil</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="" />

      <!-- Avatar (Gambar Lingkaran) -->
      <div style="display: flex; justify-content: center; margin-top: 20px;">
        <ion-avatar>
          <img src="https://picsum.photos/200/300?random=10" alt="Profile Picture" />
        </ion-avatar>
      </div>

      <!-- List Item turun ke bawah -->
      <ion-list style="margin-top: 20px;">
        <ion-item>
          <ion-label>Alpian</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>XI PPLG 2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>0823xxxxx</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
          <ion-label
            >Coding, Reading Book, Fotography, Chess Player, Watching
            Film</ion-label
          >
        </ion-item>
      </ion-list>

      <!-- Tombol Save -->
      <ion-button expand="block">Save</ion-button>

      <!-- Tombol Cancel dengan warna merah -->
      <ion-button expand="full" color="danger">Cancel</ion-button>
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
  IonAvatar,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
</script>
