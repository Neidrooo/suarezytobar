# Video Assets

## Archivos Requeridos

Este directorio debe contener los siguientes archivos optimizados:

### 1. Video Optimizado
- **Nombre:** `Video-Optimized.mp4`
- **Tamaño esperado:** ~1.84 MB
- **Características:**
  - Compresión H.264 con CRF 28
  - Audio AAC a 128kbps
  - Reducción de 35% vs original (2.84 MB → 1.84 MB)

### 2. Poster Image
- **Nombre:** `hero-poster.jpg`
- **Tamaño esperado:** 100-200 KB
- **Características:**
  - Frame extraído del video (segundo 1)
  - Calidad optimizada para web
  - Se muestra mientras el video carga

## Cómo Generar Estos Archivos

### Comprimir Video
```bash
ffmpeg -i "Video De Calidad Profesional.mp4" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k "Video-Optimized.mp4"
```

### Generar Poster
```bash
ffmpeg -i "Video De Calidad Profesional.mp4" -ss 00:00:01 -vframes 1 -q:v 2 hero-poster.jpg
```

## Beneficios de Performance

- **LCP mejorado:** Video más ligero carga ~35% más rápido
- **Experiencia de usuario:** Poster evita pantalla negra inicial
- **Bandwidth:** Ahorro de ~1 MB por visita
- **Core Web Vitals:** Mejor score en Lighthouse

## Archivos Actuales

- `Video De Calidad Profesional.mp4` (2.9 MB) - Original, mantener como backup
- `Video-Optimized.mp4` (1.84 MB) - Versión optimizada (PENDIENTE)
- `hero-poster.jpg` - Poster image (PENDIENTE)
