<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Artikel</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Artikel</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="" />

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>ARTIKEL TERKINI</ion-card-subtitle>
          <ion-card-title>Artikel</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <!-- Item 1 -->
            <ion-item>
              <ion-thumbnail slot="start">
                <img
                  alt="Silhouette of mountains"
                  src="https://picsum.photos/200/300?random=10"
                />
              </ion-thumbnail>
              <ion-label>Item</ion-label>
              <ion-icon aria-hidden="true" :icon="chevronForward"></ion-icon>
            </ion-item>

            <!-- Item 2 -->
            <ion-item>
              <ion-thumbnail slot="start">
                <img
                  alt="Silhouette of mountains"
                  src="https://picsum.photos/200/300?random=10"
                />
              </ion-thumbnail>
              <ion-label>Item</ion-label>
              <ion-icon aria-hidden="true" :icon="chevronForward"></ion-icon>
            </ion-item>

            <!-- Item 3 -->
            <ion-item>
              <ion-thumbnail slot="start">
                <img
                  alt="Silhouette of mountains"
                  src="https://picsum.photos/200/300?random=10"
                />
              </ion-thumbnail>
              <ion-label>Item</ion-label>
              <ion-icon aria-hidden="true" :icon="chevronForward"></ion-icon>
            </ion-item>

            <!-- Item 4 (No Lines) -->
            <ion-item lines="none">
              <ion-thumbnail slot="start">
                <img
                  alt="Silhouette of mountains"
                  src="https://picsum.photos/200/300?random=10"
                />
              </ion-thumbnail>
              <ion-label>Item</ion-label>
              <ion-icon aria-hidden="true" :icon="chevronForward"></ion-icon>
            </ion-item>
          </ion-list>
        </ion-card-content>
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
  IonIcon, // Import IonIcon for the arrow icon
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { chevronForward } from "ionicons/icons";
</script>
