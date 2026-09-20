import * as THREE from 'three';

export type ArtifactModelType =
  | 'noli'
  | 'medal'
  | 'ophthalmology'
  | 'compass'
  | 'quill'
  | 'fili'
  | 'solidaridad'
  | 'diploma'
  | 'press'
  | 'ship';

type ThemeOpts = {
  wireframe: boolean;
  materialTheme: 'original' | 'gold' | 'bronze';
};

function makeCanvasTexture(
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  w = 1024,
  h = 1024
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.imageSmoothingEnabled = true;
    draw(ctx, w, h);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  tex.needsUpdate = true;
  return tex;
}

function themedMat(
  opts: ThemeOpts,
  color: number,
  roughness = 0.35,
  metalness = 0.25,
  extras: THREE.MeshStandardMaterialParameters = {}
): THREE.MeshStandardMaterial {
  if (opts.materialTheme === 'gold') {
    return new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.18,
      wireframe: opts.wireframe,
      ...extras,
    });
  }
  if (opts.materialTheme === 'bronze') {
    return new THREE.MeshStandardMaterial({
      color: 0x8b5a2b,
      metalness: 0.82,
      roughness: 0.35,
      wireframe: opts.wireframe,
      ...extras,
    });
  }
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    wireframe: opts.wireframe,
    ...extras,
  });
}

function glassMat(opts: ThemeOpts, color = 0xd9f1ff, transmission = 0.9): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    transmission,
    roughness: 0.06,
    metalness: 0,
    ior: 1.5,
    thickness: 0.45,
    transparent: true,
    wireframe: opts.wireframe,
  });
}

function addHotspots(
  group: THREE.Group,
  hotspots: Array<{ id: string; position: [number, number, number] }>
) {
  hotspots.forEach((hs) => {
    const pin = new THREE.Group();
    pin.position.set(...hs.position);
    pin.name = `hotspot-${hs.id}`;

    pin.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 24, 24),
        new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          emissive: 0xc59b27,
          emissiveIntensity: 1.0,
          roughness: 0.15,
          metalness: 0.6,
        })
      )
    );
    pin.add(
      new THREE.Mesh(
        new THREE.RingGeometry(0.14, 0.22, 32),
        new THREE.MeshBasicMaterial({
          color: 0xffe08a,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.85,
        })
      )
    );
    group.add(pin);
  });
}

function addMuseumLabel(group: THREE.Group, lines: string[], y: number) {
  const tex = makeCanvasTexture((ctx, w, h) => {
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#fff8ea');
    bg.addColorStop(1, '#efe2c4');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#c59b27';
    ctx.lineWidth = 20;
    ctx.strokeRect(28, 28, w - 56, h - 56);
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, w - 96, h - 96);
    ctx.fillStyle = '#2a170a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const startY = h / 2 - ((lines.length - 1) * 58) / 2;
    lines.forEach((line, i) => {
      ctx.font = i === 0 ? 'bold 68px Georgia, serif' : '40px Georgia, serif';
      ctx.fillText(line, w / 2, startY + i * 58);
    });
  }, 1024, 360);

  const plate = new THREE.Mesh(
    new THREE.PlaneGeometry(2.9, 0.95),
    new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.5,
      metalness: 0.05,
      side: THREE.DoubleSide,
    })
  );
  plate.position.set(0, y, 0.15);
  plate.rotation.x = -0.4;
  group.add(plate);

  // Brass stand under label
  const stand = new THREE.Mesh(
    new THREE.BoxGeometry(2.95, 0.06, 0.5),
    themedMat({ wireframe: false, materialTheme: 'original' }, 0xb8922a, 0.3, 0.85)
  );
  stand.position.set(0, y - 0.42, 0);
  group.add(stand);
}

function addDisplayBase(group: THREE.Group, radius = 1.7, y = -2.0) {
  const wood = themedMat({ wireframe: false, materialTheme: 'original' }, 0x4a3020, 0.55, 0.2);
  const brass = themedMat({ wireframe: false, materialTheme: 'original' }, 0xc59b27, 0.25, 0.9);

  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.08, 0.22, 64), wood);
  plinth.position.y = y;
  plinth.receiveShadow = true;
  group.add(plinth);

  const rim = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.98, 0.04, 12, 64), brass);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = y + 0.12;
  group.add(rim);
}

/* ───────────────────────── NOLI BOOK ───────────────────────── */
function buildNoli(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();

  const leatherTex = makeCanvasTexture((ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#5a3218');
    g.addColorStop(0.4, '#2e1609');
    g.addColorStop(1, '#160a04');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // Leather grain
    for (let i = 0; i < 2500; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(212,175,55,0.07)' : 'rgba(0,0,0,0.16)';
      ctx.beginPath();
      ctx.ellipse(Math.random() * w, Math.random() * h, Math.random() * 6 + 1, Math.random() * 3 + 0.5, Math.random(), 0, Math.PI * 2);
      ctx.fill();
    }

    // Double gold frame
    ctx.strokeStyle = '#f0d060';
    ctx.lineWidth = 16;
    ctx.strokeRect(48, 48, w - 96, h - 96);
    ctx.lineWidth = 5;
    ctx.strokeRect(78, 78, w - 156, h - 156);

    // Corner ornaments
    const drawCorner = (x: number, y: number, sx: number, sy: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(sx, sy);
      ctx.beginPath();
      ctx.moveTo(0, 40);
      ctx.quadraticCurveTo(0, 0, 40, 0);
      ctx.stroke();
      ctx.restore();
    };
    drawCorner(100, 100, 1, 1);
    drawCorner(w - 100, 100, -1, 1);
    drawCorner(100, h - 100, 1, -1);
    drawCorner(w - 100, h - 100, -1, -1);

    // Symbolic cross + circle (Noli cover motif)
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(w / 2, h * 0.58, 85, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w / 2, h * 0.48);
    ctx.lineTo(w / 2, h * 0.72);
    ctx.moveTo(w / 2 - 60, h * 0.58);
    ctx.lineTo(w / 2 + 60, h * 0.58);
    ctx.stroke();

    // Readable title
    ctx.fillStyle = '#ffe08a';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.65)';
    ctx.shadowBlur = 12;
    ctx.font = 'bold 78px Georgia, "Times New Roman", serif';
    ctx.fillText('NOLI ME TANGERE', w / 2, 175);
    ctx.font = 'italic 38px Georgia, serif';
    ctx.fillText('Novela Tagala', w / 2, 240);
    ctx.font = 'bold 52px Georgia, serif';
    ctx.fillText('JOSÉ RIZAL', w / 2, 350);
    ctx.font = 'bold 34px Georgia, serif';
    ctx.fillText('BERLIN · MARCH 1887', w / 2, h - 120);
    ctx.shadowBlur = 0;
  });

  const coverMat =
    opts.materialTheme === 'original'
      ? new THREE.MeshStandardMaterial({
          map: leatherTex,
          roughness: 0.38,
          metalness: 0.18,
          wireframe: opts.wireframe,
        })
      : themedMat(opts, 0x2d180d, 0.4, 0.3);

  // Layered pages for depth
  const pagesTex = makeCanvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#f8efdc';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 3) {
      ctx.fillStyle = y % 6 === 0 ? '#e8d9b8' : '#f0e4cc';
      ctx.fillRect(0, y, w, 1.5);
    }
    ctx.fillStyle = 'rgba(80,50,20,0.2)';
    for (let i = 0; i < 32; i++) ctx.fillRect(40, 60 + i * 28, w - 100, 2.5);
  });
  const pagesMat =
    opts.materialTheme === 'original'
      ? new THREE.MeshStandardMaterial({ map: pagesTex, roughness: 0.88, metalness: 0.02, wireframe: opts.wireframe })
      : themedMat(opts, 0xebe2ca, 0.75, 0.05);

  const bw = 2.35;
  const bh = 3.15;
  const bt = 0.68;

  // Page block — slightly offset layers
  for (let i = 0; i < 5; i++) {
    const layer = new THREE.Mesh(
      new THREE.BoxGeometry(bw - 0.14 - i * 0.01, bh - 0.18, 0.1),
      pagesMat
    );
    layer.position.set(0.08 + i * 0.008, 0, -bt / 2 + 0.12 + i * 0.1);
    group.add(layer);
  }

  // Front cover — slightly open for drama
  const front = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, 0.07), coverMat);
  front.position.set(0.04, 0, bt / 2);
  front.rotation.y = -0.08;
  front.castShadow = true;
  group.add(front);

  const back = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, 0.07), coverMat);
  back.position.set(0, 0, -bt / 2);
  group.add(back);

  // Rounded spine with vertical title
  const spineTex = makeCanvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#2a140a';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 400; i++) {
      ctx.fillStyle = 'rgba(212,175,55,0.05)';
      ctx.fillRect(Math.random() * w, Math.random() * h, 2, 8);
    }
    ctx.fillStyle = '#f5d76e';
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.font = 'bold 58px Georgia, serif';
    ctx.fillText('NOLI ME TANGERE', 0, 8);
    ctx.font = '32px Georgia, serif';
    ctx.fillText('RIZAL · 1887', 0, 55);
    ctx.restore();
  }, 256, 1024);

  const spine = new THREE.Mesh(
    new THREE.CylinderGeometry(bt / 2 + 0.02, bt / 2 + 0.02, bh, 32, 1, false, Math.PI / 2, Math.PI),
    opts.materialTheme === 'original'
      ? new THREE.MeshStandardMaterial({ map: spineTex, roughness: 0.4, metalness: 0.15, wireframe: opts.wireframe })
      : coverMat
  );
  spine.position.set(-(bw / 2), 0, 0);
  spine.rotation.y = Math.PI / 2;
  group.add(spine);

  // Raised gold bands
  const gold = themedMat(opts, 0xd4af37, 0.15, 0.95);
  for (let i = -1.25; i <= 1.25; i += 0.5) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(bt / 2 + 0.03, 0.032, 12, 28, Math.PI), gold);
    band.position.set(-(bw / 2), i, 0);
    band.rotation.set(Math.PI / 2, -Math.PI / 2, 0);
    group.add(band);
  }

  // Metal corner protectors on front cover
  const cornerGeo = new THREE.BoxGeometry(0.28, 0.28, 0.04);
  [
    [bw / 2 - 0.2, bh / 2 - 0.2],
    [-(bw / 2 - 0.2), bh / 2 - 0.2],
    [bw / 2 - 0.2, -(bh / 2 - 0.2)],
    [-(bw / 2 - 0.2), -(bh / 2 - 0.2)],
  ].forEach(([x, y]) => {
    const c = new THREE.Mesh(cornerGeo, gold);
    c.position.set(x, y, bt / 2 + 0.05);
    group.add(c);
  });

  // Silk ribbon
  const ribbonCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.3, -bh / 2 + 0.1, 0.05),
    new THREE.Vector3(0.5, -bh / 2 - 0.4, 0.15),
    new THREE.Vector3(0.65, -bh / 2 - 1.05, 0.22),
  ]);
  group.add(
    new THREE.Mesh(
      new THREE.TubeGeometry(ribbonCurve, 32, 0.05, 10, false),
      new THREE.MeshStandardMaterial({ color: 0x8b1a1a, roughness: 0.4, wireframe: opts.wireframe })
    )
  );

  addDisplayBase(group, 1.75, -bh / 2 - 0.55);
  addMuseumLabel(group, ['NOLI ME TANGERE', 'José Rizal · Berlin 1887'], -bh / 2 - 1.35);

  return group;
}

/* ───────────────────────── ATENEO MEDAL ───────────────────────── */
function buildMedal(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();
  const gold = themedMat(opts, 0xd4af37, 0.16, 0.92);
  const brightGold = themedMat(opts, 0xf0d060, 0.12, 0.95);

  const faceTex = makeCanvasTexture((ctx, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const g = ctx.createRadialGradient(cx, cy, 30, cx, cy, w * 0.48);
    g.addColorStop(0, '#fff2b0');
    g.addColorStop(0.45, '#d4af37');
    g.addColorStop(1, '#7a5810');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // Outer ring
    ctx.strokeStyle = '#4a3008';
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.44, 0, Math.PI * 2);
    ctx.stroke();

    // Laurel leaves around rim
    ctx.fillStyle = '#5a3a08';
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      const lx = cx + Math.cos(a) * (w * 0.37);
      const ly = cy + Math.sin(a) * (w * 0.37);
      ctx.save();
      ctx.translate(lx, ly);
      ctx.rotate(a + Math.PI / 2);
      ctx.beginPath();
      ctx.ellipse(0, 0, 22, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.fillStyle = '#2a1805';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 130px Georgia, serif';
    ctx.fillText('IHS', cx, cy - 85);
    ctx.font = 'bold 52px Georgia, serif';
    ctx.fillText('SOBRESALIENTE', cx, cy + 35);
    ctx.font = 'bold 38px Georgia, serif';
    ctx.fillText('ATENEO MUNICIPAL', cx, cy + 105);
    ctx.font = 'bold 42px Georgia, serif';
    ctx.fillText('1877', cx, cy + 165);
  });

  // Thick beveled coin body
  const coin = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.62, 0.22, 72), gold);
  coin.rotation.x = Math.PI / 2;
  coin.castShadow = true;
  group.add(coin);

  // Readable face disc
  const face = new THREE.Mesh(
    new THREE.CircleGeometry(1.5, 72),
    new THREE.MeshStandardMaterial({
      map: faceTex,
      metalness: 0.72,
      roughness: 0.22,
      wireframe: opts.wireframe,
    })
  );
  face.position.z = 0.12;
  group.add(face);

  // Back face (simpler)
  const backFace = new THREE.Mesh(new THREE.CircleGeometry(1.5, 72), brightGold);
  backFace.position.z = -0.12;
  backFace.rotation.y = Math.PI;
  group.add(backFace);

  // Beaded rim
  group.add(new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.1, 20, 72), gold));
  for (let i = 0; i < 48; i++) {
    const a = (i / 48) * Math.PI * 2;
    const bead = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 12), brightGold);
    bead.position.set(Math.cos(a) * 1.5, Math.sin(a) * 1.5, 0.1);
    group.add(bead);
  }

  // 3D laurel leaves (left + right arcs)
  for (const side of [-1, 1]) {
    for (let i = 0; i < 8; i++) {
      const t = i / 7;
      const a = side * (0.4 + t * 1.4);
      const leaf = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 10, 8),
        themedMat(opts, 0xb89228, 0.3, 0.7)
      );
      leaf.scale.set(1.6, 0.55, 0.35);
      leaf.position.set(Math.sin(a) * 1.15 * side * 0.15 + side * 0.95, -0.9 + t * 1.5, 0.15);
      leaf.rotation.z = a * 0.5;
      group.add(leaf);
    }
  }

  // Suspension ring + chain links
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.06, 16, 32), gold);
  ring.position.set(0, 1.95, 0);
  group.add(ring);
  const link = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.04, 12, 24), gold);
  link.position.set(0, 2.2, 0);
  link.rotation.x = Math.PI / 2;
  group.add(link);

  // Ateneo ribbons
  const maroon = new THREE.MeshStandardMaterial({ color: 0x6e1b1b, roughness: 0.5, wireframe: opts.wireframe });
  const goldRib = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.4, wireframe: opts.wireframe });
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.48, 1.7, 0.05), maroon);
  left.position.set(-0.28, 2.75, -0.05);
  left.rotation.z = -0.12;
  group.add(left);
  const right = new THREE.Mesh(new THREE.BoxGeometry(0.48, 1.7, 0.05), goldRib);
  right.position.set(0.28, 2.75, -0.05);
  right.rotation.z = 0.12;
  group.add(right);

  // Ribbon tip folds
  const tipL = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.35, 0.04), maroon);
  tipL.position.set(-0.35, 1.85, -0.08);
  tipL.rotation.z = 0.4;
  group.add(tipL);

  addDisplayBase(group, 1.5, -2.15);
  addMuseumLabel(group, ['ATENEO MEDAL', 'Sobresaliente · March 1877'], -2.95);

  return group;
}

/* ───────────────────────── OPHTHALMIC KIT ───────────────────────── */
function buildOphthalmology(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();
  const brass = themedMat(opts, 0xc59e38, 0.22, 0.9);
  const darkBrass = themedMat(opts, 0x8a6a20, 0.35, 0.8);
  const steel = themedMat(opts, 0xc8d0d8, 0.15, 0.95);
  const velvet = themedMat(opts, 0x4a1525, 0.75, 0.05);
  const wood = themedMat(opts, 0x5c3a20, 0.5, 0.15);

  // Wooden case body
  const caseOuter = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.55, 2.3), wood);
  caseOuter.position.y = -1.5;
  caseOuter.castShadow = true;
  group.add(caseOuter);

  // Velvet interior tray
  const tray = new THREE.Mesh(new THREE.BoxGeometry(3.35, 0.2, 2.05), velvet);
  tray.position.y = -1.28;
  group.add(tray);

  // Brass rim
  const rim = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.1, 2.4), brass);
  rim.position.y = -1.2;
  group.add(rim);

  // Hinged lid (open)
  const lid = new THREE.Group();
  lid.position.set(0, -1.15, -1.15);
  lid.rotation.x = -1.15;
  const lidWood = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.12, 2.3), wood);
  lid.add(lidWood);
  const lidVelvet = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.04, 2.0), velvet);
  lidVelvet.position.y = -0.08;
  lid.add(lidVelvet);
  group.add(lid);

  // Nameplate
  const plateTex = makeCanvasTexture((ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#e0c060');
    g.addColorStop(1, '#a87820');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#4a3008';
    ctx.lineWidth = 14;
    ctx.strokeRect(18, 18, w - 36, h - 36);
    ctx.fillStyle = '#1a1005';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 64px Georgia, serif';
    ctx.fillText('OPHTHALMIC SET', w / 2, h / 2 - 45);
    ctx.font = 'bold 38px Georgia, serif';
    ctx.fillText('Dr. de Wecker · Paris', w / 2, h / 2 + 25);
    ctx.font = '32px Georgia, serif';
    ctx.fillText('Dr. Becker · Heidelberg · 1885–86', w / 2, h / 2 + 85);
  }, 1024, 420);

  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 0.05, 0.7),
    new THREE.MeshStandardMaterial({ map: plateTex, metalness: 0.75, roughness: 0.25, wireframe: opts.wireframe })
  );
  plate.position.set(0, -1.12, 0.95);
  group.add(plate);

  // Loupe
  const loupe = new THREE.Group();
  loupe.position.set(-0.7, 0.15, 0);
  loupe.add(new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.12, 24, 56), brass));
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 0.08, 48), glassMat(opts));
  lens.rotation.x = Math.PI / 2;
  loupe.add(lens);
  // Focus knurling
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const knurl = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.06), darkBrass);
    knurl.position.set(Math.cos(a) * 0.95, Math.sin(a) * 0.95, 0);
    loupe.add(knurl);
  }
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.55, 24), brass);
  barrel.position.set(0, -1.05, 0);
  loupe.add(barrel);
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.12, 1.2, 20), brass);
  handle.position.set(0, -1.9, 0);
  loupe.add(handle);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), brass);
  pommel.position.set(0, -2.55, 0);
  loupe.add(pommel);
  group.add(loupe);

  // Graefe knife
  const knife = new THREE.Group();
  knife.position.set(0.85, -0.35, 0.25);
  knife.rotation.z = -0.4;
  knife.add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.4, 12), brass));
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.15, 0.015), steel);
  blade.position.y = 1.2;
  knife.add(blade);
  // Blade tip
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.25, 4), steel);
  tip.position.y = 1.85;
  knife.add(tip);
  group.add(knife);

  // Ophthalmoscope
  const scope = new THREE.Group();
  scope.position.set(1.2, 0.45, -0.4);
  scope.add(new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.14, 36), brass));
  const scopeGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.05, 24), glassMat(opts, 0xa8d4ff, 0.7));
  scopeGlass.position.y = 0.08;
  scope.add(scopeGlass);
  const scopeHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.9, 12), brass);
  scopeHandle.position.set(0, -0.55, 0);
  scopeHandle.rotation.z = 0.3;
  scope.add(scopeHandle);
  group.add(scope);

  // Forceps
  const forceps = new THREE.Group();
  forceps.position.set(0.2, -0.85, -0.5);
  forceps.rotation.z = 0.9;
  forceps.add(new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.3, 0.03), steel));
  const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.3, 0.03), steel);
  arm2.position.x = 0.1;
  arm2.rotation.z = 0.08;
  forceps.add(arm2);
  group.add(forceps);

  addMuseumLabel(group, ['OPHTHALMIC KIT', 'Paris & Heidelberg · 1885–86'], -2.55);

  return group;
}

/* ───────────────────────── COMPASS ───────────────────────── */
function buildCompass(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();
  const brass = themedMat(opts, 0xd4a84a, 0.2, 0.92);
  const dark = themedMat(opts, 0x6a4a16, 0.38, 0.75);
  const red = themedMat(opts, 0xb01c1c, 0.25, 0.85);
  const blue = themedMat(opts, 0x1a4a8a, 0.25, 0.85);

  // Outer brass case
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.45, 0.5, 48), brass);
  bowl.castShadow = true;
  group.add(bowl);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.07, 12, 48), dark);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.22;
  group.add(rim);

  // Side engraving band (closed cylinder — safer than openEnded)
  const bandTex = makeCanvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#c59e38';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#5a3a08';
    ctx.font = 'bold 44px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("MARINER'S COMPASS  ·  1882", w / 2, h / 2);
  }, 1024, 128);
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(1.58, 1.58, 0.2, 48),
    new THREE.MeshStandardMaterial({
      map: bandTex,
      metalness: 0.85,
      roughness: 0.28,
      wireframe: opts.wireframe,
    })
  );
  band.position.y = 0.02;
  group.add(band);

  // Dial with readable N/E/S/W
  const dialTex = makeCanvasTexture((ctx, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const r = w * 0.42;
    const bg = ctx.createRadialGradient(cx, cy, 8, cx, cy, r);
    bg.addColorStop(0, '#fff8e8');
    bg.addColorStop(1, '#e8d9b8');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#2a170a';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    for (let d = 0; d < 360; d += 5) {
      const rad = ((d - 90) * Math.PI) / 180;
      const len = d % 30 === 0 ? 30 : d % 10 === 0 ? 16 : 9;
      ctx.lineWidth = d % 30 === 0 ? 3.5 : 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rad) * (r - len), cy + Math.sin(rad) * (r - len));
      ctx.lineTo(cx + Math.cos(rad) * r, cy + Math.sin(rad) * r);
      ctx.stroke();
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#8b1a1a';
    ctx.font = 'bold 78px Georgia, serif';
    ctx.fillText('N', cx, cy - r + 55);
    ctx.fillStyle = '#1a1008';
    ctx.fillText('S', cx, cy + r - 55);
    ctx.fillText('E', cx + r - 55, cy);
    ctx.fillText('W', cx - r + 55, cy);

    ctx.fillStyle = '#8b1a1a';
    ctx.font = 'bold 28px Georgia, serif';
    ctx.fillText('SS SALVADORA', cx, cy + 70);
    ctx.fillStyle = '#3e2a14';
    ctx.font = 'bold 24px Georgia, serif';
    ctx.fillText('1882 VOYAGE', cx, cy + 108);
  });

  const dial = new THREE.Mesh(
    new THREE.CircleGeometry(1.35, 48),
    new THREE.MeshStandardMaterial({
      map: dialTex,
      roughness: 0.38,
      metalness: 0.05,
      wireframe: opts.wireframe,
    })
  );
  dial.rotation.x = -Math.PI / 2;
  dial.position.y = 0.28;
  group.add(dial);

  // Pivot pin
  const pivot = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.28, 12), brass);
  pivot.position.y = 0.4;
  group.add(pivot);

  // Needle (N red / S blue)
  const north = new THREE.Mesh(new THREE.ConeGeometry(0.13, 1.15, 5), red);
  north.rotation.x = -Math.PI / 2;
  north.position.set(0, 0.42, -0.55);
  group.add(north);

  const south = new THREE.Mesh(new THREE.ConeGeometry(0.13, 1.15, 5), blue);
  south.rotation.x = Math.PI / 2;
  south.position.set(0, 0.42, 0.55);
  group.add(south);

  const center = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), brass);
  center.position.set(0, 0.45, 0);
  group.add(center);

  // Clear glass cover (standard material — more reliable than transmission)
  const glassCover = new THREE.Mesh(
    new THREE.CylinderGeometry(1.4, 1.4, 0.06, 40),
    new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
      roughness: 0.05,
      metalness: 0.05,
      wireframe: opts.wireframe,
    })
  );
  glassCover.position.y = 0.35;
  group.add(glassCover);

  // Open hinged lid
  const lid = new THREE.Group();
  lid.position.set(0, 0.22, -1.55);
  lid.rotation.x = -1.85;
  lid.add(new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.14, 48), dark));
  const lidInner = new THREE.Mesh(new THREE.CircleGeometry(1.35, 40), themedMat(opts, 0xb8c0c8, 0.15, 0.9));
  lidInner.rotation.x = Math.PI / 2;
  lidInner.position.y = -0.08;
  lid.add(lidInner);
  group.add(lid);

  // Hinge pins
  for (const x of [-0.3, 0.3]) {
    const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.18, 10), brass);
    hinge.rotation.z = Math.PI / 2;
    hinge.position.set(x, 0.22, -1.52);
    group.add(hinge);
  }

  // Suspension loop
  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.06, 12, 24), brass);
  loop.position.set(0, 0, -1.95);
  group.add(loop);

  addDisplayBase(group, 1.5, -0.95);
  addMuseumLabel(group, ['VOYAGE COMPASS', 'SS Salvadora · 1882'], -1.8);

  return group;
}

/* ───────────────────────── QUILL & INKWELL ───────────────────────── */
function buildQuill(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();
  const bronze = themedMat(opts, 0x946b2d, 0.25, 0.85);
  const gold = themedMat(opts, 0xd4af37, 0.12, 0.95);
  const cream = themedMat(opts, 0xf5edd6, 0.7, 0.04);
  const darkFeather = themedMat(opts, 0xe8dcc0, 0.65, 0.04);

  // Desk blotter
  const blotter = new THREE.Mesh(
    new THREE.BoxGeometry(4.0, 0.08, 2.6),
    themedMat(opts, 0x3d2818, 0.6, 0.1)
  );
  blotter.position.y = -1.25;
  group.add(blotter);

  // Parchment with Amor Patrio
  const pageTex = makeCanvasTexture((ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#f5e9d0');
    g.addColorStop(1, '#e8d5b0');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // Age stains
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(140,90,40,${Math.random() * 0.08})`;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 60 + 10, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#1a1008';
    ctx.textAlign = 'left';
    ctx.font = 'italic bold 72px Georgia, serif';
    ctx.fillText('Amor Patrio', 80, 150);
    ctx.font = 'italic 44px Georgia, serif';
    ctx.fillText('— Laong Laan', 80, 230);
    ctx.font = '36px Georgia, serif';
    ctx.fillStyle = '#4a3020';
    ctx.fillText('Barcelona · Hunyo 1882', 80, 300);

    ctx.strokeStyle = 'rgba(50,30,15,0.4)';
    ctx.lineWidth = 3;
    for (let i = 0; i < 9; i++) {
      ctx.beginPath();
      ctx.moveTo(80, 380 + i * 52);
      ctx.quadraticCurveTo(w / 2, 375 + i * 52 + (i % 2) * 8, w - 90 - (i % 4) * 30, 380 + i * 52);
      ctx.stroke();
    }

    // Signature flourish
    ctx.font = 'italic 40px Georgia, serif';
    ctx.fillStyle = '#2a170a';
    ctx.fillText('J. Rizal', w - 280, h - 80);
  }, 1024, 768);

  const sheet = new THREE.Mesh(
    new THREE.BoxGeometry(3.4, 0.035, 2.2),
    new THREE.MeshStandardMaterial({ map: pageTex, roughness: 0.85, metalness: 0.02, wireframe: opts.wireframe })
  );
  sheet.position.set(-0.15, -1.18, 0);
  sheet.rotation.z = -0.03;
  group.add(sheet);

  // Crystal inkwell — faceted
  const inkGlass = glassMat(opts, 0x1a3020, 0.45);
  inkGlass.color = new THREE.Color(0x1a3028);
  const well = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.0, 1.2, 8), inkGlass);
  well.position.set(1.15, -0.5, 0.2);
  group.add(well);

  // Ink liquid inside
  const ink = new THREE.Mesh(
    new THREE.CylinderGeometry(0.65, 0.8, 0.55, 8),
    new THREE.MeshStandardMaterial({ color: 0x0a0a12, roughness: 0.3, metalness: 0.2, wireframe: opts.wireframe })
  );
  ink.position.set(1.15, -0.7, 0.2);
  group.add(ink);

  // Bronze collar + hinged cap
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.55, 0.25, 24), bronze);
  collar.position.set(1.15, 0.2, 0.2);
  group.add(collar);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.2, 24), bronze);
  cap.position.set(1.15, 0.4, 0.2);
  group.add(cap);
  const capKnob = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), gold);
  capKnob.position.set(1.15, 0.55, 0.2);
  group.add(capKnob);

  // Quill pen with multi-barb feather
  const pen = new THREE.Group();
  pen.position.set(-0.7, 0.15, 0.35);
  pen.rotation.set(0.1, 0.3, -0.75);

  const nib = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.55, 6), gold);
  nib.position.y = -1.4;
  pen.add(nib);
  // Nib slit detail
  const slit = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.35, 0.02), themedMat(opts, 0x3a2a10, 0.4, 0.5));
  slit.position.y = -1.35;
  pen.add(slit);

  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.045, 1.8, 14), cream);
  shaft.position.y = -0.35;
  pen.add(shaft);

  // Feather vanes — layered
  for (let i = 0; i < 7; i++) {
    const shape = new THREE.Shape();
    const spread = 0.35 + i * 0.04;
    shape.moveTo(0, 0);
    shape.bezierCurveTo(spread, 0.5, spread * 1.1, 1.6, 0, 2.4 - i * 0.05);
    shape.bezierCurveTo(-spread * 1.1, 1.6, -spread, 0.5, 0, 0);
    const vane = new THREE.Mesh(
      new THREE.ShapeGeometry(shape),
      i % 2 === 0 ? cream : darkFeather
    );
    vane.position.set(0, 0.3 + i * 0.08, i * 0.01);
    vane.rotation.y = (i - 3) * 0.04;
    pen.add(vane);
  }
  group.add(pen);

  // Wax seal
  const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.08, 24), themedMat(opts, 0x8b1a1a, 0.4, 0.2));
  seal.position.set(0.2, -1.12, 0.85);
  group.add(seal);

  addMuseumLabel(group, ['QUILL & INKWELL', 'Amor Patrio · Laong Laan · 1882'], -2.15);

  return group;
}

/* ───────────────────────── EL FILIBUSTERISMO ───────────────────────── */
function buildFili(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();

  const coverTex = makeCanvasTexture((ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#2a1010');
    g.addColorStop(0.5, '#140808');
    g.addColorStop(1, '#0a0404');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 1200; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(180,40,40,0.06)' : 'rgba(0,0,0,0.2)';
      ctx.fillRect(Math.random() * w, Math.random() * h, 3, 2);
    }
    ctx.strokeStyle = '#c45c4a';
    ctx.lineWidth = 14;
    ctx.strokeRect(48, 48, w - 96, h - 96);
    ctx.fillStyle = '#e8a090';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowBlur = 10;
    ctx.font = 'bold 64px Georgia, serif';
    ctx.fillText('EL FILIBUSTERISMO', w / 2, 200);
    ctx.font = 'italic 36px Georgia, serif';
    ctx.fillText('Novela Filipina', w / 2, 270);
    ctx.font = 'bold 48px Georgia, serif';
    ctx.fillText('JOSÉ RIZAL', w / 2, 380);
    ctx.font = 'bold 32px Georgia, serif';
    ctx.fillText('GHENT · 1891', w / 2, h - 120);
    ctx.shadowBlur = 0;
  });

  const coverMat =
    opts.materialTheme === 'original'
      ? new THREE.MeshStandardMaterial({ map: coverTex, roughness: 0.4, metalness: 0.12, wireframe: opts.wireframe })
      : themedMat(opts, 0x2a1010, 0.4, 0.25);

  const pagesMat = themedMat(opts, 0xe8dcc4, 0.85, 0.02);
  const bw = 2.3;
  const bh = 3.1;
  const bt = 0.55;

  const pages = new THREE.Mesh(new THREE.BoxGeometry(bw - 0.1, bh - 0.15, bt - 0.1), pagesMat);
  pages.position.set(0.05, 0, 0);
  group.add(pages);

  const front = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, 0.07), coverMat);
  front.position.set(0, 0, bt / 2);
  group.add(front);
  const back = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, 0.07), coverMat);
  back.position.set(0, 0, -bt / 2);
  group.add(back);

  const spine = new THREE.Mesh(
    new THREE.CylinderGeometry(bt / 2, bt / 2, bh, 24, 1, false, Math.PI / 2, Math.PI),
    coverMat
  );
  spine.position.set(-(bw / 2), 0, 0);
  spine.rotation.y = Math.PI / 2;
  group.add(spine);

  const accent = themedMat(opts, 0xc45c4a, 0.25, 0.8);
  for (let i = -1.1; i <= 1.1; i += 0.55) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(bt / 2 + 0.02, 0.025, 8, 20, Math.PI), accent);
    band.position.set(-(bw / 2), i, 0);
    band.rotation.set(Math.PI / 2, -Math.PI / 2, 0);
    group.add(band);
  }

  // Black mourning ribbon (dedicated to Gomburza)
  const ribbon = new THREE.Mesh(
    new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.2, -bh / 2, 0),
        new THREE.Vector3(0.4, -bh / 2 - 0.5, 0.1),
        new THREE.Vector3(0.5, -bh / 2 - 1.0, 0.15),
      ]),
      20,
      0.045,
      8,
      false
    ),
    new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5, wireframe: opts.wireframe })
  );
  group.add(ribbon);

  addDisplayBase(group, 1.7, -bh / 2 - 0.5);
  addMuseumLabel(group, ['EL FILIBUSTERISMO', 'Ghent · 1891 · Sequel to Noli'], -bh / 2 - 1.3);
  return group;
}

/* ───────────────────────── LA SOLIDARIDAD ───────────────────────── */
function buildSolidaridad(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();

  const paperTex = makeCanvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#f2e6d0';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = `rgba(120,80,40,${Math.random() * 0.06})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 40, 2);
    }
    ctx.fillStyle = '#8b1a1a';
    ctx.textAlign = 'center';
    ctx.font = 'bold 70px Georgia, serif';
    ctx.fillText('LA SOLIDARIDAD', w / 2, 140);
    ctx.fillStyle = '#3a2818';
    ctx.font = 'italic 36px Georgia, serif';
    ctx.fillText('Quincenario Democrático', w / 2, 200);
    ctx.font = 'bold 32px Georgia, serif';
    ctx.fillText('Año I  ·  Número 1  ·  15 Febrero 1889', w / 2, 270);

    // Column lines
    ctx.strokeStyle = 'rgba(60,40,20,0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w / 2, 320);
    ctx.lineTo(w / 2, h - 80);
    ctx.stroke();

    ctx.fillStyle = 'rgba(40,25,15,0.45)';
    for (let col = 0; col < 2; col++) {
      const x0 = col === 0 ? 70 : w / 2 + 40;
      for (let i = 0; i < 14; i++) {
        ctx.fillRect(x0, 340 + i * 38, col === 0 ? w / 2 - 120 : w / 2 - 110, 3);
      }
    }

    ctx.fillStyle = '#5a3a18';
    ctx.font = '28px Georgia, serif';
    ctx.fillText('Barcelona → Madrid  ·  Lopez Jaena · del Pilar · Rizal', w / 2, h - 50);
  }, 1024, 1280);

  const paper = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 3.4, 0.04),
    new THREE.MeshStandardMaterial({
      map: paperTex,
      roughness: 0.9,
      metalness: 0.02,
      wireframe: opts.wireframe,
    })
  );
  paper.rotation.x = -0.08;
  paper.castShadow = true;
  group.add(paper);

  // Folded second sheet behind
  const back = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.3, 0.03),
    themedMat(opts, 0xe8d9b8, 0.9, 0.02)
  );
  back.position.set(0.08, -0.05, -0.06);
  back.rotation.z = 0.04;
  group.add(back);

  // Ink stamp
  const stamp = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.28, 0.04, 24),
    themedMat(opts, 0x8b1a1a, 0.45, 0.15)
  );
  stamp.rotation.x = Math.PI / 2;
  stamp.position.set(0.9, -1.3, 0.05);
  group.add(stamp);

  addDisplayBase(group, 1.6, -2.1);
  addMuseumLabel(group, ['LA SOLIDARIDAD', 'Propaganda newspaper · 1889'], -2.9);
  return group;
}

/* ───────────────────────── MADRID DIPLOMA ───────────────────────── */
function buildDiploma(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();
  const brass = themedMat(opts, 0xc59b27, 0.25, 0.88);

  const scrollTex = makeCanvasTexture((ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#f7ecd4');
    g.addColorStop(1, '#e4d2ae');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#c59b27';
    ctx.lineWidth = 16;
    ctx.strokeRect(40, 40, w - 80, h - 80);
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, w - 120, h - 120);

    ctx.fillStyle = '#2a170a';
    ctx.textAlign = 'center';
    ctx.font = 'bold 48px Georgia, serif';
    ctx.fillText('UNIVERSIDAD CENTRAL', w / 2, 160);
    ctx.font = 'bold 42px Georgia, serif';
    ctx.fillText('DE MADRID', w / 2, 220);
    ctx.font = 'italic 36px Georgia, serif';
    ctx.fillText('Licenciado en Medicina', w / 2, 320);
    ctx.font = 'italic 34px Georgia, serif';
    ctx.fillText('Licenciado en Filosofía y Letras', w / 2, 380);
    ctx.font = 'bold 40px Georgia, serif';
    ctx.fillText('JOSÉ RIZAL', w / 2, 500);
    ctx.font = '30px Georgia, serif';
    ctx.fillText('1884  ·  1885', w / 2, 580);
    ctx.font = '26px Georgia, serif';
    ctx.fillText('Sobresaliente in Philosophy & Letters', w / 2, 680);
  });

  const sheet = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 3.5, 0.035),
    new THREE.MeshStandardMaterial({ map: scrollTex, roughness: 0.85, wireframe: opts.wireframe })
  );
  group.add(sheet);

  // Wax seals
  for (const [x, y] of [
    [-0.9, -1.4],
    [0.9, -1.4],
  ] as const) {
    const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.08, 20), themedMat(opts, 0x8b1a1a, 0.4, 0.2));
    seal.rotation.x = Math.PI / 2;
    seal.position.set(x, y, 0.05);
    group.add(seal);
  }

  // Ribbon
  const rib = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.9, 0.03), themedMat(opts, 0x6e1b1b, 0.55, 0.05));
  rib.position.set(0, -1.55, 0.04);
  group.add(rib);
  const ribGold = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.9, 0.03), brass);
  ribGold.position.set(0.2, -1.55, 0.03);
  group.add(ribGold);

  addDisplayBase(group, 1.65, -2.15);
  addMuseumLabel(group, ['MADRID LICENTIATES', 'Medicine 1884 · Philosophy 1885'], -2.95);
  return group;
}

/* ───────────────────────── PRINTING PRESS ───────────────────────── */
function buildPress(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();
  const iron = themedMat(opts, 0x3a3a40, 0.35, 0.7);
  const brass = themedMat(opts, 0xc59b27, 0.25, 0.88);
  const wood = themedMat(opts, 0x5c3a20, 0.55, 0.15);

  // Base table
  const table = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.2, 2.0), wood);
  table.position.y = -1.1;
  group.add(table);
  for (const [x, z] of [
    [-1.3, -0.7],
    [1.3, -0.7],
    [-1.3, 0.7],
    [1.3, 0.7],
  ] as const) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.0, 0.18), wood);
    leg.position.set(x, -1.7, z);
    group.add(leg);
  }

  // Press frame
  const frame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 0.25), iron);
  frame.position.set(0, 0.1, -0.4);
  group.add(frame);

  // Screw / platen
  const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.4, 16), brass);
  screw.position.set(0, 0.5, -0.15);
  group.add(screw);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.08, 12, 28), brass);
  wheel.position.set(0, 1.15, -0.15);
  group.add(wheel);
  // Wheel spokes
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.9, 0.06), brass);
    spoke.position.set(Math.cos(a) * 0.25, 1.15, -0.15 + Math.sin(a) * 0.25);
    spoke.rotation.z = a;
    group.add(spoke);
  }

  const platen = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.12, 1.2), iron);
  platen.position.set(0, -0.15, 0.15);
  group.add(platen);

  // Fresh printed Noli sheet
  const sheetTex = makeCanvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#f5ecd8';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2a170a';
    ctx.textAlign = 'center';
    ctx.font = 'bold 56px Georgia, serif';
    ctx.fillText('NOLI ME TANGERE', w / 2, h / 2 - 20);
    ctx.font = '32px Georgia, serif';
    ctx.fillText('Berlin · 1887', w / 2, h / 2 + 50);
  }, 512, 384);
  const sheet = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.02, 1.0),
    new THREE.MeshStandardMaterial({ map: sheetTex, roughness: 0.9, wireframe: opts.wireframe })
  );
  sheet.position.set(0, -0.05, 0.2);
  group.add(sheet);

  // Ink roller
  const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.4, 20), themedMat(opts, 0x1a1a1a, 0.4, 0.3));
  roller.rotation.z = Math.PI / 2;
  roller.position.set(0, -0.55, 0.7);
  group.add(roller);

  addMuseumLabel(group, ['BERLIN PRINTING PRESS', 'Noli Me Tangere · March 1887'], -2.55);
  return group;
}

/* ───────────────────────── SS SALVADORA ───────────────────────── */
function buildShip(opts: ThemeOpts): THREE.Group {
  const group = new THREE.Group();
  const hull = themedMat(opts, 0x3d2a18, 0.45, 0.2);
  const deck = themedMat(opts, 0xc4a574, 0.55, 0.1);
  const white = themedMat(opts, 0xe8e0d0, 0.5, 0.05);
  const black = themedMat(opts, 0x1a1a1a, 0.4, 0.3);
  const brass = themedMat(opts, 0xc59b27, 0.25, 0.85);

  // Hull
  const body = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.7, 1.1), hull);
  body.position.y = -0.2;
  body.castShadow = true;
  group.add(body);

  // Bow taper (simple wedge)
  const bow = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.0, 4), hull);
  bow.rotation.z = -Math.PI / 2;
  bow.position.set(2.2, -0.2, 0);
  group.add(bow);

  // Deck
  const deckMesh = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.08, 1.0), deck);
  deckMesh.position.y = 0.2;
  group.add(deckMesh);

  // Cabin
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 0.75), white);
  cabin.position.set(-0.3, 0.5, 0);
  group.add(cabin);

  // Funnel
  const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.9, 16), black);
  funnel.position.set(0.5, 0.95, 0);
  group.add(funnel);
  const funnelTop = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.15, 16), themedMat(opts, 0x8b1a1a, 0.4, 0.2));
  funnelTop.position.set(0.5, 1.4, 0);
  group.add(funnelTop);

  // Mast
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.8, 10), themedMat(opts, 0x5c4030, 0.5, 0.1));
  mast.position.set(-1.2, 1.1, 0);
  group.add(mast);

  // Yard / sail hint
  const yard = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 1.2), themedMat(opts, 0x5c4030, 0.5, 0.1));
  yard.position.set(-1.2, 1.7, 0);
  group.add(yard);
  const sail = new THREE.Mesh(
    new THREE.PlaneGeometry(0.7, 0.9),
    new THREE.MeshStandardMaterial({
      color: 0xf5f0e4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      wireframe: opts.wireframe,
    })
  );
  sail.position.set(-1.2, 1.25, 0.15);
  sail.rotation.y = 0.15;
  group.add(sail);

  // Nameplate on hull
  const nameTex = makeCanvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#3d2a18';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f0d060';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 56px Georgia, serif';
    ctx.fillText('SS SALVADORA', w / 2, h / 2);
  }, 1024, 256);
  const nameplate = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 0.28, 0.04),
    new THREE.MeshStandardMaterial({ map: nameTex, roughness: 0.5, wireframe: opts.wireframe })
  );
  nameplate.position.set(0, -0.15, 0.58);
  group.add(nameplate);

  // Water wake base
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(2.0, 2.1, 0.08, 48),
    new THREE.MeshStandardMaterial({
      color: 0x3a6a8a,
      transparent: true,
      opacity: 0.55,
      roughness: 0.2,
      metalness: 0.3,
      wireframe: opts.wireframe,
    })
  );
  water.position.y = -0.75;
  group.add(water);

  // Tiny flag
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.22), themedMat(opts, 0xc45c2a, 0.5, 0.05));
  flag.position.set(-1.2, 2.0, 0.1);
  group.add(flag);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 6), brass);
  pole.position.set(-1.2, 1.95, 0);
  group.add(pole);

  addMuseumLabel(group, ['SS SALVADORA', 'Secret departure · May 3, 1882'], -1.65);
  return group;
}

const HOTSPOTS: Record<ArtifactModelType, Array<{ id: string; position: [number, number, number] }>> = {
  noli: [
    { id: 'cover', position: [0, 0.55, 0.45] },
    { id: 'spine', position: [-1.35, 0, 0] },
    { id: 'ribbon', position: [0.6, -1.6, 0.25] },
  ],
  medal: [
    { id: 'crest', position: [0, 0.25, 0.3] },
    { id: 'laurel', position: [0.9, -0.4, 0.25] },
    { id: 'ribbon-ring', position: [0, 1.7, 0] },
  ],
  ophthalmology: [
    { id: 'lens', position: [-0.7, 1.1, 0] },
    { id: 'gears', position: [-0.7, 0.15, 0.4] },
    { id: 'handle', position: [-0.7, -1.5, 0] },
  ],
  compass: [
    { id: 'needle', position: [0, 0.55, 0] },
    { id: 'rose', position: [0, 0.3, 1.05] },
    { id: 'hinge', position: [0, 0.5, -1.5] },
  ],
  quill: [
    { id: 'nib', position: [-1.1, -0.7, 0.5] },
    { id: 'feather', position: [0.0, 1.5, 0.1] },
    { id: 'well', position: [1.15, -0.1, 0.2] },
  ],
  fili: [
    { id: 'cover', position: [0, 0.5, 0.4] },
    { id: 'spine', position: [-1.3, 0, 0] },
    { id: 'ribbon', position: [0.5, -1.5, 0.2] },
  ],
  solidaridad: [
    { id: 'masthead', position: [0, 1.2, 0.1] },
    { id: 'columns', position: [0, 0, 0.1] },
    { id: 'stamp', position: [0.9, -1.3, 0.15] },
  ],
  diploma: [
    { id: 'title', position: [0, 1.0, 0.1] },
    { id: 'name', position: [0, 0.1, 0.1] },
    { id: 'seals', position: [0, -1.4, 0.15] },
  ],
  press: [
    { id: 'wheel', position: [0, 1.15, -0.15] },
    { id: 'platen', position: [0, -0.1, 0.2] },
    { id: 'sheet', position: [0, 0, 0.35] },
  ],
  ship: [
    { id: 'hull', position: [0, -0.2, 0.6] },
    { id: 'funnel', position: [0.5, 1.2, 0] },
    { id: 'name', position: [0, -0.15, 0.7] },
  ],
};

export function buildEnhancedArtifactModel(
  type: ArtifactModelType,
  opts: ThemeOpts
): THREE.Group {
  let group: THREE.Group;
  switch (type) {
    case 'noli':
      group = buildNoli(opts);
      break;
    case 'medal':
      group = buildMedal(opts);
      break;
    case 'ophthalmology':
      group = buildOphthalmology(opts);
      break;
    case 'compass':
      group = buildCompass(opts);
      break;
    case 'quill':
      group = buildQuill(opts);
      break;
    case 'fili':
      group = buildFili(opts);
      break;
    case 'solidaridad':
      group = buildSolidaridad(opts);
      break;
    case 'diploma':
      group = buildDiploma(opts);
      break;
    case 'press':
      group = buildPress(opts);
      break;
    case 'ship':
      group = buildShip(opts);
      break;
    default:
      group = buildNoli(opts);
  }

  addHotspots(group, HOTSPOTS[type]);
  group.scale.setScalar(0.82);
  group.name = `model-${type}`;
  return group;
}
