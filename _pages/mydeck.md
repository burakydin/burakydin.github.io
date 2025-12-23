---
layout: page
title: 
permalink: /clashroyale/
description: 
nav: false
---

<style>
  .deck-container {
    background: var(--global-code-bg-color);
    border-radius: 12px;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .deck-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .deck-tab {
    padding: 10px 24px;
    border: none;
    background: var(--global-bg-color);
    color: var(--global-text-color);
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
  }
  
  .deck-tab:hover {
    background: var(--global-theme-color);
    color: white;
  }
  
  .deck-tab.active {
    background: var(--global-theme-color);
    color: white;
  }
  
  .deck-content {
    display: none;
  }
  
  .deck-content.active {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  
  .deck-content img {
    width: 120px;
    height: auto;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }
  
  .deck-content img:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 575px) {
    .deck-container {
      padding: 10px;
      max-width: 340px;
    }
    
    .deck-content.active {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
    }
    
    .deck-content img {
      width: 100%;
    }
    
    .deck-tab {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
    
    .page-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    
    .page-header img {
      max-width: 200px;
    }
    
    .page-header h1 {
      font-size: 1.5rem;
    }
  }
</style>

<div class="page-header" style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px; margin-top: -20px;">
  <img src="/assets/img/cr-banner.png" alt="Clash Royale" style="max-width: 400px; height: auto;">
  <h1 style="margin: 0;">clash royale</h1>
</div>

<div class="player-stats" style="text-align: center; margin-bottom: 20px;">
  <p style="font-size: 1.2rem; margin: 0;">
    🏆 9093  ·  <strong> Favorite Card: </strong>  Musketeer 
  </p>
  <p style="font-size: 0.9rem; margin: 0;">
    mostly having fun 2v2ing with friends
  </p>
</div>

<div class="deck-container">
  <div class="deck-tabs">
    <button class="deck-tab active" onclick="showDeck('new')">New Deck</button>
    <button class="deck-tab" onclick="showDeck('old')">Old Deck</button>
  </div>
  
  <div id="new-deck" class="deck-content active">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/royal-hogs-ev1.png" alt="Evo Royal Hogs">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/zap-ev1.png" alt="Evo Zap">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/three-musketeers.png" alt="Three Musketeers">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/heal-spirit.png" alt="Heal Spirit">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/ice-golem.png" alt="Ice Golem">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/berserker.png" alt="Berserker">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/minions.png" alt="Minions">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/fireball.png" alt="Fireball">
  </div>
  
  <div id="old-deck" class="deck-content">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/giant-snowball-ev1.png" alt="Evo Snowball">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/tesla-ev1.png" alt="Evo Tesla">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/mighty-miner.png" alt="Mighty Miner">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/poison.png" alt="Poison">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/ice-spirit.png" alt="Ice Spirit">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/berserker.png" alt="Berserker">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/minions.png" alt="Minions">
    <img src="https://cdn.royaleapi.com/static/img/cards-150/goblin-drill.png" alt="Goblin Drill">
  </div>
</div>

<script>
  function showDeck(deck) {
    // Hide all decks
    document.querySelectorAll('.deck-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.deck-tab').forEach(el => el.classList.remove('active'));
    
    // Show selected deck
    document.getElementById(deck + '-deck').classList.add('active');
    event.target.classList.add('active');
  }
</script>
