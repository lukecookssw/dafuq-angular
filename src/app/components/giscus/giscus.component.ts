import { Component, ElementRef, input, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-giscus',
  standalone: true,
  imports: [],
  templateUrl: './giscus.component.html',
  styleUrl: './giscus.component.scss'
})
export class GiscusComponent implements OnInit, OnChanges, OnDestroy {

  repo = 'lukecookssw/dafuq-angular'
  repoId = 'R_kgDOPYlNbA';
  mapping = 'specific';
  @Input() discussionTitle!: string;

  ngOnInit(): void {
    // Listen for theme changes
    window.addEventListener('theme-changed', () => {
      this.updateTheme();
    });
  }

  private scriptEl?: HTMLScriptElement;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['discussionTitle'] && this.discussionTitle) {
      console.log("DISCUSSION TITLE: ", this.discussionTitle);
      this.loadGiscus();
    }
  }

  private getCurrentTheme(): string {
    // Check if body has dark-theme class
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }


  private loadGiscus() {
    // Clear old Giscus if exists
    this.el.nativeElement.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', this.repo);
    script.setAttribute('data-repo-id', this.repoId);
    script.setAttribute('data-mapping', this.mapping);

    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOPYlNbM4CtzG_');

    script.setAttribute('data-term', this.discussionTitle);


    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', 'true');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');

    script.setAttribute('data-theme', this.getCurrentTheme());
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');


    this.el.nativeElement.appendChild(script);
    this.scriptEl = script;
  }

  updateTheme() {
    if (this.scriptEl && this.discussionTitle) {
      // Reload Giscus with new theme
      this.loadGiscus();
    }
  }

  ngOnDestroy() {
    if (this.scriptEl) {
      this.scriptEl.remove();
    }
  }
}
