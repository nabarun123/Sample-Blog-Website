export default function Footer() {
  return (
    <footer id="footer" class="pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          <img
            class="mb-2"
            src="data:image/png;base64,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"
            alt=""
            width="220"
            height="80"
          />
          <small class="d-block mb-3 text-muted">© 2017-2021</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="#">
                Cool stuff
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Random feature
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Team feature
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Stuff for developers
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Another one
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="#">
                Resource
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Resource name
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Another resource
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="#">
                Team
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Locations
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
