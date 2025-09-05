# WorkSpot - Mobile Arbeitsplätze

Eine moderne React-Webapp zum Buchen von mobilen Arbeitsplätzen bei Privatpersonen - ähnlich wie Airbnb für Arbeitsplätze.

## Features

- **Moderne UI/UX**: Responsive Design mit Tailwind CSS
- **Suche & Filter**: Arbeitsplätze nach Ort, Preis und Ausstattung filtern
- **Detailansicht**: Ausführliche Informationen zu jedem Arbeitsplatz
- **Buchungssystem**: Interaktive Buchungskomponente mit Preiskalkulation
- **Benutzerprofil**: Profilverwaltung und Buchungsübersicht
- **Mobile-first**: Optimiert für alle Gerätegrößen

## Technologien

- **React 18** mit Hooks
- **Vite** für schnelle Entwicklung
- **Tailwind CSS** für modernes Styling
- **React Router** für Navigation
- **Lucide React** für Icons

## Installation & Start

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

Die App läuft dann auf `http://localhost:3000`

## Projektstruktur

```
src/
├── components/          # Wiederverwendbare Komponenten
│   ├── Header.jsx      # Navigation
│   └── WorkspaceCard.jsx # Arbeitsplatz-Karte
├── pages/              # Hauptseiten
│   ├── Home.jsx        # Startseite
│   ├── Search.jsx      # Suchseite
│   ├── WorkspaceDetail.jsx # Detailansicht
│   └── Profile.jsx     # Benutzerprofil
├── App.jsx             # Hauptkomponente
├── main.jsx           # Entry Point
└── index.css          # Globale Styles
```

## Nächste Schritte

- Backend-API Integration
- Authentifizierung hinzufügen  
- Zahlungssystem implementieren
- Push-Notifications
- Chat-Funktion zwischen Gästen und Gastgebern
- Bewertungssystem
- Karten-Integration
