"""테마팩 그림을 images/theme_packs/<그림 이름>.webp 로 받는다. theme_packs.py가 이 파일이 있으면 테마팩에 연결한다.

    python tools/gamedata/theme_pack_images.py [--force]

- 그림 이름은 게임 데이터 테마의 uiConfigs.packSpriteId (먼저 fetch_static.py --md).
- 그림 파일은 팬 사이트 연심(yeon-sim.github.io)의 GitHub 저장소 static/images/pack/ 에 있는 게임 추출본을 받는다.
  (그림 저작권은 Project Moon. 연심은 이 그림에 권리를 주장하지 않음 — 저장소 NOTICE.md)
- 이미 받은 그림은 --force 없이는 다시 받지 않는다. 요청 사이 1초."""
import io, os, sys, time, urllib.request
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
import md_enemies

SRC = 'https://raw.githubusercontent.com/yeon-sim/yeon-sim.github.io/master/static/images/pack/{}.png'
OUT = os.path.join(paths.REPO, 'images', 'theme_packs')
WIDTH = 300   # 원본 380×690. 카드에는 150px 안팎으로 보이므로 2배 밀도 정도만 남김

def main():
    from PIL import Image
    force = '--force' in sys.argv
    os.makedirs(OUT, exist_ok=True)
    sprites = sorted(set(md_enemies.theme_sprites().values()))
    got, skipped, missing = [], 0, []
    for sp in sprites:
        dst = os.path.join(OUT, f'{sp}.webp')
        if os.path.exists(dst) and not force:
            skipped += 1; continue
        try:
            data = urllib.request.urlopen(urllib.request.Request(SRC.format(sp), headers={'User-Agent': 'gesellschaft-tools'}), timeout=60).read()
        except urllib.error.HTTPError as ex:
            missing.append(f'{sp} ({ex.code})'); continue
        im = Image.open(io.BytesIO(data)).convert('RGBA')
        if im.width > WIDTH: im = im.resize((WIDTH, round(im.height * WIDTH / im.width)), Image.LANCZOS)
        im.save(dst, 'WEBP', quality=82)
        got.append(sp)
        time.sleep(1)
    print(f'테마팩 그림 {len(sprites)}종: 새로 받음 {len(got)}, 이미 있음 {skipped}, 없음 {len(missing)}')
    if missing: print('원본에 없는 그림:', missing)

if __name__ == '__main__':
    main()
